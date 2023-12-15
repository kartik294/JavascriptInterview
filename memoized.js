// Implement a function that returns a memoized version of a function which accepts any number of arguments.
function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = args.join("-");

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
function sum(...args) {
  console.log("Calculating sum...");
  return args.reduce((acc, val) => acc + val, 0);
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(1, 2, 3));
console.log(memoizedSum(1, 2, 3));
console.log(memoizedSum(2, 3, 4));
console.log(memoizedSum(1, 2, 4));
