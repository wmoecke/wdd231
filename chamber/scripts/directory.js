const membersContainer = document.querySelector("#members-container");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

const membershipLabels = {
    1: "Member",
    2: "Silver Member",
    3: "Gold Member"
};

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("The members data could not be loaded.");
        }

        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        membersContainer.innerHTML = `<p class="error-message">${error.message}</p>`;
    }
}

function createMemberCard(member) {
    const membership = membershipLabels[member.membershipLevel] ?? "Member";

    return `
        <article class="member-card">
            <div class="member-heading">
                <h3>${member.name}</h3>
                <p class="member-category">${member.category}</p>
            </div>

            <div class="member-body">
                <img
                    src="images/${member.image}"
                    alt="${member.name} logo"
                    width="520"
                    height="320"
                    loading="lazy"
                >

                <div class="member-content">
                    <p class="address"><strong>ADDRESS:</strong> ${member.address}</p>
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> <a href="${member.website}" target="_blank" rel="noopener">website</a></p>
                    <p class="member-level"><strong>LEVEL:</strong> ${membership}</p>
                    <p class="description">${member.description}</p>
                </div>
            </div>
        </article>
    `;
}

function displayMembers(members) {
    membersContainer.innerHTML = members.map(createMemberCard).join("");
}

function setView(view) {
    const isGrid = view === "grid";

    membersContainer.className = isGrid ? "members-grid" : "members-list";

    gridButton.classList.toggle("active", isGrid);
    listButton.classList.toggle("active", !isGrid);

    gridButton.setAttribute("aria-pressed", `${isGrid}`);
    listButton.setAttribute("aria-pressed", `${!isGrid}`);
}

gridButton.addEventListener("click", () => setView("grid"));
listButton.addEventListener("click", () => setView("list"));

getMembers();