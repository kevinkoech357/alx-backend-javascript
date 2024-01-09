export default function getListStudentIds(studentArray) {
  // Check if the argument is an array
  if (!Array.isArray(studentArray)) {
    return [];
  }

  // Use the map function to extract the 'id' property from each object
  const idsArray = studentArray.map((student) => student.id);

  return idsArray;
}
