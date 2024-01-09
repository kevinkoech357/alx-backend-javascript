export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // If the endpoint is not tracked in the WeakMap, initialize the count to 0
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the current endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
