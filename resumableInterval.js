// Implement a function that creates a resumable interval object.

function ResumableInterval(callback, interval) {
  let timerId;
  let startTime;
  let elapsedTime = 0;
  let isPaused = false;

  this.start = function () {
    if (isPaused) {
      startTime = Date.now() - elapsedTime;
      timerId = setTimeout(runCallback, interval - elapsedTime);
    } else {
      startTime = Date.now();
      timerId = setTimeout(runCallback, interval);
    }
    isPaused = false;
  };

  this.pause = function () {
    clearTimeout(timerId);
    elapsedTime = Date.now() - startTime;
    isPaused = true;
  };

  this.stop = function () {
    clearTimeout(timerId);
    elapsedTime = 0;
    isPaused = false;
  };

  const runCallback = () => {
    callback();
    this.start();
  };

  this.start();
}

// Example usage:
function myFunction() {
  console.log("Interval callback executed!");
}

const interval = new ResumableInterval(myFunction, 1000);

// Pause after 3 seconds
setTimeout(() => {
  interval.pause();
  console.log("Interval paused after 3 seconds");
}, 3000);

// Resume after 2 seconds
setTimeout(() => {
  interval.start();
  console.log("Interval resumed after 2 seconds");
}, 5000);

// Stop after 5 seconds
setTimeout(() => {
  interval.stop();
  console.log("Interval stopped after 5 seconds");
}, 8000);
