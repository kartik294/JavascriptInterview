// Implement a function that returns an object with all falsey values removed.
function removeFalseyValues(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Example usage:
const myObject = {
  a: 0,
  b: false,
  c: "",
  d: 42,
  e: "Hello",
  f: null,
  g: undefined,
};

const filteredObject = removeFalseyValues(myObject);
console.log(filteredObject);
