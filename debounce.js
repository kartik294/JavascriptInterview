// Implement a debounce function that comes with a cancel method to cancel delayed invocations.

function debounce(callback, delay) {
  let timeoutId;

  function cancel() {
    clearTimeout(timeoutId);
  }

  function debounced(...args) {
    cancel(); // Clear previous timeout
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  debounced.cancel = cancel;

  return debounced;
}

// Example usage:
function greet(name) {
  console.log(`Hello, ${name}!`);
}

const delayedGreet = debounce(greet, 500);

delayedGreet("Alice");
delayedGreet("Bob");
delayedGreet.cancel();

delayedGreet("Charlie");
