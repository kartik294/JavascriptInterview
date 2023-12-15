// Implement a function to resolve a given value to a Promise

function resolveToPromise(value) {
  return new Promise((resolve) => {
    resolve(value);
  });
}

// Example usage:
const resolvedPromise = resolveToPromise("Resolved Value");

resolvedPromise.then((result) => {
  console.log("Resolved:", result);
});
