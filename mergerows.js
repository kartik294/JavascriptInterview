// Implement a function to merge rows of data from the same user.
function mergeUserData(data) {
  const mergedData = {};

  data.forEach((row) => {
    const userId = row.userId;

    if (!mergedData[userId]) {
      mergedData[userId] = { ...row };
    } else {
      mergedData[userId] = { ...mergedData[userId], ...row };
    }
  });

  return Object.values(mergedData);
}

// Example usage:
const userData = [
  { userId: 1, name: "Alice", age: 25 },
  { userId: 2, name: "Bob", age: 30 },
  { userId: 1, city: "New York" },
  { userId: 2, city: "San Francisco" },
];

const mergedUserData = mergeUserData(userData);
console.log(mergedUserData);
