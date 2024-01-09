export default function cleanSet(set, startString) {
  // Filter values that start with startString and remove the startString
  const filteredValues = [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  if (startString.length === 0) {
    return ''; // Return an empty string
  }

  // Join filtered values with hyphens
  return filteredValues.join('-');
}
