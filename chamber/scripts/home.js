const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
const forecastList = document.querySelector("#forecast-list");
const weatherMessage = document.querySelector("#weather-message");
const spotlightsContainer = document.querySelector("#spotlights-container");

const membershipLabels = {
    2: "Silver Member",
    3: "Gold Member"
};

// São Paulo, Brazil
const latitude = -23.55;
const longitude = -46.63;

// OpenWeatherMap API key
const apiKey = "f99f53def66351bf0d49e51dc86cac34";

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error("Weather data could not be loaded.");
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        weatherMessage.textContent = error.message;
    }
}

function displayCurrentWeather(data) {
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    weatherDescription.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = description;
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(0, 3);

    forecastList.innerHTML = dailyForecasts
        .map((forecast) => {
            const date = new Date(forecast.dt_txt);
            const day = date.toLocaleDateString("en-US", { weekday: "short" });
            const temp = Math.round(forecast.main.temp);

            return `<li><strong>${day}:</strong> ${temp}&deg;C</li>`;
        })
        .join("");
}

async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Member data could not be loaded.");
        }

        const data = await response.json();
        const qualifiedMembers = data.members.filter((member) => member.membershipLevel === 2 || member.membershipLevel === 3);
        const selectedMembers = shuffleArray(qualifiedMembers).slice(0, 3);

        displaySpotlights(selectedMembers);
    } catch (error) {
        spotlightsContainer.innerHTML = `<p class="error-message">${error.message}</p>`;
    }
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function displaySpotlights(members) {
    spotlightsContainer.innerHTML = members
        .map((member) => {
            const membership = membershipLabels[member.membershipLevel];

            return `
                <article class="spotlight-card">
                    <img src="images/${member.image}" alt="${member.name} logo" width="520" height="320" loading="lazy">
                    <div class="spotlight-card-content">
                        <h3>${member.name}</h3>
                        <span class="membership">${membership}</span>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <p><a href="${member.website}" target="_blank" rel="noopener">Visit website</a></p>
                    </div>
                </article>
            `;
        })
        .join("");
}

getWeather();
getSpotlights();
