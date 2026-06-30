const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces programming concepts using Python.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces HTML and CSS for building basic websites.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course teaches how to write programs with functions and logic.",
        technology: ["Python"],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces object-oriented programming principles.",
        technology: ["C#"],
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds dynamic websites using HTML, CSS, and JavaScript.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course focuses on frontend development and responsive web applications.",
        technology: ["HTML", "CSS", "JavaScript", "APIs"],
        completed: false
    }
];

const courseCards = document.querySelector("#course-cards");
const creditsTotal = document.querySelector("#credits-total");
const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

function createCourseCard(course) {
    const completionText = course.completed ? "Completed" : "Not completed";
    const className = course.completed ? "course-card completed" : "course-card";

    return `
        <article class="${className}">
            <h3>${course.subject} ${course.number}</h3>
            <p><strong>${course.title}</strong></p>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Technology: ${course.technology.join(", ")}</p>
            <p class="status">${completionText}</p>
        </article>
    `;
}

function displayCourses(courseList) {
    courseCards.innerHTML = courseList.map(createCourseCard).join("");

    const totalCredits = courseList.reduce((total, course) => total + course.credits, 0);
    creditsTotal.textContent = `Total credits shown: ${totalCredits}`;
}

allButton.addEventListener("click", () => {
    displayCourses(courses);
});

wddButton.addEventListener("click", () => {
    const wddCourses = courses.filter((course) => course.subject === "WDD");
    displayCourses(wddCourses);
});

cseButton.addEventListener("click", () => {
    const cseCourses = courses.filter((course) => course.subject === "CSE");
    displayCourses(cseCourses);
});

displayCourses(courses);
