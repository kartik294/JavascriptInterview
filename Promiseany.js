function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];

    for (const promise of promises) {
      Promise.resolve(promise)
        .then((result) => {
          resolve(result); // Resolve with the first resolved promise's value
        })
        .catch((error) => {
          errors.push(error); // Collect errors if all promises are rejected

          if (errors.length === promises.length) {
            reject(new AggregateError("All promises were rejected", errors));
          }
        });
    }
  });
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "one"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 200, "two"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, "three"));

promiseAny([promise1, promise2, promise3])
  .then((result) => {
    console.log("Resolved:", result); // Output: Resolved: one
  })
  .catch((error) => {
    console.log("Rejected:", error); // This will not execute in this example
  });
