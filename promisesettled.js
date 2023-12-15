// Implement the functionality behaviour of Promise.allSettled()
function promiseAllSettled(promises) {
  return Promise.all(
    promises.map((promise) =>
      Promise.resolve(promise)
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason }))
    )
  );
}

// Example usage:
const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Promise 1 resolved")
);
const promise2 = new Promise((_, reject) =>
  setTimeout(reject, 500, "Promise 2 rejected")
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 1500, "Promise 3 resolved")
);

promiseAllSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
