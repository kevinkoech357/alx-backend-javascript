export default function getStudentsByLocation(studentsArray, city) {
  // Use filter to determine students in specified city
  const studentsPerCity = studentsArray.filter((student) => student.location === city);

  return studentsPerCity;
}
