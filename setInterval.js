// Implement a function that acts like setInterval but returns a function to cancel the Interval.
function customSetInterval(callback, interval) {
  const intervalId = setInterval(callback, interval);

  const cancel = () => {
    clearInterval(intervalId);
  };

  return cancel;
}

function sayHello() {
  console.log("Hello!");
}

const cancelInterval = customSetInterval(sayHello, 1000);

setTimeout(() => {
  cancelInterval();
}, 5000);
