// Implement a function that returns a memoized version of a function which accepts a single argument.

function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

// Example usage:
function square(x) {
  console.log("Calculating square...");
  return x * x;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(7));
console.log(memoizedSquare(7));
