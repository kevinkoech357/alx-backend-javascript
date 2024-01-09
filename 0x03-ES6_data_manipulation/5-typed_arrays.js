export default function createInt8TypeArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView on the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
