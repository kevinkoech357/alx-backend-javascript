export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  inputMap.forEach((quantity, item) => {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    } else {
      updatedMap.set(item, quantity);
    }
  });

  return updatedMap;
}
