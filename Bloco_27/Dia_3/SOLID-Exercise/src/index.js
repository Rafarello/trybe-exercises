// ./src/index.ts
Object.defineProperty(exports, '__esModule', { value: true });
exports.setApproved = exports.updateApprovalData = exports.approvedStudents = exports.percentageGradesIntoLetters = void 0;
/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
    name,
    disciplines: disciplines.map(({ name, grade }) => {
        let letterGrade;
        if (grade >= 0.9) { letterGrade = 'A'; } else if (grade >= 0.8) { letterGrade = 'B'; } else if (grade >= 0.7) { letterGrade = 'C'; } else if (grade >= 0.6) { letterGrade = 'D'; } else if (grade >= 0.1) { letterGrade = 'E'; } else { letterGrade = 'F'; }
        return { name, grade, letterGrade };
    }),
});
exports.percentageGradesIntoLetters = percentageGradesIntoLetters;
/* "Determinar" */
const approvedStudents = ({ disciplines }) => disciplines.every(({ grade }) => grade > 0.7);
exports.approvedStudents = approvedStudents;
/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
    console.log(`A pessoa com nome ${studentName} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
};
exports.updateApprovalData = updateApprovalData;
function setApproved(students) {
    students
        .map(percentageGradesIntoLetters)
        .filter(approvedStudents)
        .map(updateApprovalData);
}
exports.setApproved = setApproved;
