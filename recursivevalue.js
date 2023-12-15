// Implement a function to recursively transform values.
function recursivelyTransform(obj) {
  if (typeof obj === "number") {
    return obj * 2;
  } else if (Array.isArray(obj)) {
    return obj.map((item) => recursivelyTransform(item));
  } else if (typeof obj === "object" && obj !== null) {
    const transformedObj = {};
    for (const key in obj) {
      transformedObj[key] = recursivelyTransform(obj[key]);
    }
    return transformedObj;
  } else {
    return obj;
  }
}

// Example usage:
const data = {
  a: 1,
  b: [2, 3, { c: 4 }],
  d: {
    e: 5,
    f: [6, 7],
  },
};

const transformedData = recursivelyTransform(data);
console.log(transformedData);
