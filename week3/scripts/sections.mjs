export function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");

    sectionSelect.innerHTML = sections
        .map((section) => `<option value="${section.sectionNum}">${section.sectionNum}</option>`)
        .join("");
}
