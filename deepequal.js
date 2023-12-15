// Implement a function that determines if two values are deep equal
function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }

  if (
    typeof val1 !== "object" ||
    val1 === null ||
    typeof val2 !== "object" ||
    val2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!val2.hasOwnProperty(key) || !deepEqual(val1[key], val2[key])) {
      return false;
    }
  }

  return true;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false
