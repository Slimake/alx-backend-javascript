export default function getListStudentIds(listOfStudents) {
  if (Array.isArray(listOfStudents)) {
    return listOfStudents.map((student) => student.id);
  }
  return [];
}
