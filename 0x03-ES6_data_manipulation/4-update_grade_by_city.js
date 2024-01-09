export default function updateStudentGradeByCity(studentsArray, city, newGradesArray) {
  // Use the filter function to select students in the specified city
  const studentsPerCity = studentsArray.filter((student) => student.location === city);

  // Use the map function to update their grades based on the newGradesArray
  const updatedStudents = studentsPerCity.map((student) => {
    const matchingGrade = newGradesArray.find((grade) => grade.studentId === student.id);

    // If a matching grade is found, use it; otherwise, set the grade to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Return a new object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
}
