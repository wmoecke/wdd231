const byuiCourse = {
    code: "WDD 231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis A"
        }
    ],
    enrollStudent(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum === sectionNum
        );

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
        }
    },
    dropStudent(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum === sectionNum
        );

        if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
            this.sections[sectionIndex].enrolled--;
        }
    }
};

export default byuiCourse;
