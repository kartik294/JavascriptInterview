function squashObject(obj, prefix = "") {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedObj = squashObject(obj[key], `${prefix}${key}.`);
      Object.assign(result, nestedObj);
    } else {
      result[`${prefix}${key}`] = obj[key];
    }
  }

  return result;
}

// Example usage:
const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};

const squashedObj = squashObject(nestedObj);
console.log(squashedObj);
