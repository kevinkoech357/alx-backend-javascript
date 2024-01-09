export default function getStudentIdsSum(studentsArray) {
  // Use the reduce function to sum up all student ids
  const totalSum = studentsArray.reduce((sum, student) => sum + student.id, 0);

  return totalSum;
}
