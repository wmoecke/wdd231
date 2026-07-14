import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);

    byuiCourse.enrollStudent(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);

    byuiCourse.dropStudent(sectionNum);
    renderSections(byuiCourse.sections);
});
