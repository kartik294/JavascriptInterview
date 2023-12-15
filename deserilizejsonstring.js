// Implement a function to deserialize a JSON string.
function deserializeJSON(jsonString) {
  try {
    const parsedObject = JSON.parse(jsonString);
    return parsedObject;
  } catch (error) {
    console.error("Error while deserializing JSON:", error);
    return null;
  }
}

// Example usage:
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const deserializedObject = deserializeJSON(jsonString);
console.log(deserializedObject);
