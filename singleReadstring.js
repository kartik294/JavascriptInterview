// Implement a function that formats a list of items into a single readable string.
function formatList(items) {
  if (!Array.isArray(items)) {
    return "Invalid input. Expected an array.";
  }

  if (items.length === 0) {
    return "The list is empty.";
  }

  const formattedString = items.join(", ");
  return `List: ${formattedString}`;
}

// Example usage:
const list1 = ["apple", "banana", "orange"];
const list2 = []; // Empty list
const notAList = "This is not an array";

console.log(formatList(list1));
console.log(formatList(list2));
console.log(formatList(notAList));
