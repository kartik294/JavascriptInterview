// Implement a function that recursively flattens an array into a single level deep.
function flattenArray(arr) {
  const flattened = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
