export function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

export function renderSections(sections) {
    const tableBody = document.querySelector("#sections");

    tableBody.innerHTML = sections
        .map(
            (section) => `
                <tr>
                    <td>${section.sectionNum}</td>
                    <td>${section.enrolled}</td>
                    <td>${section.instructor}</td>
                </tr>
            `
        )
        .join("");
}
