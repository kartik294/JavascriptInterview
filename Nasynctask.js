// Implement a function to execute N async tasks in series.

async function executeTasksInSeries(tasks) {
  for (const task of tasks) {
    await task();
  }
}

// Example usage:
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const task1 = async () => {
  await delay(1000);
  console.log("Task 1 executed");
};

const task2 = async () => {
  await delay(1500);
  console.log("Task 2 executed");
};

const task3 = async () => {
  await delay(500);
  console.log("Task 3 executed");
};

// Array of async tasks
const tasksArray = [task1, task2, task3];

// Execute tasks in series
executeTasksInSeries(tasksArray)
  .then(() => {
    console.log("All tasks completed");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
