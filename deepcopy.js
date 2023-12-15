// Implement a function that performs a deep copy of a value, but also handles circular references.

function deepCopyWithCircular(obj, visited = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  const newObj = Array.isArray(obj) ? [] : {};

  visited.set(obj, newObj);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCopyWithCircular(obj[key], visited);
    }
  }

  return newObj;
}

// Example usage:
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
obj.circularRef = obj;

const copiedObj = deepCopyWithCircular(obj);
console.log(copiedObj);
