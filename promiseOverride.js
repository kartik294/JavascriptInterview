// Implement a promisify function that allows the original function to override the return value.

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const originalReturnValue = fn(...args);

      if (originalReturnValue instanceof Promise) {
        originalReturnValue.then(resolve).catch(reject);
      } else {
        resolve(originalReturnValue);
      }
    });
  };
}

// Example usage:
function syncFunction(arg) {
  return arg * 2;
}

function asyncFunction(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg * 3);
    }, 1000);
  });
}

const promisifiedSyncFunction = promisify(syncFunction);
const promisifiedAsyncFunction = promisify(asyncFunction);

// Using the promisified functions
promisifiedSyncFunction(5)
  .then((result) => {
    console.log("Sync Function Result:", result); // Output: 10
  })
  .catch((err) => {
    console.error("Error:", err);
  });

promisifiedAsyncFunction(7)
  .then((result) => {
    console.log("Async Function Result:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
