function convertToJSON(value) {
  try {
    const jsonString = JSON.stringify(value);
    return jsonString;
  } catch (error) {
    console.log("Error converting to json", error);
    return null;
  }
}

const myObject1 = { key1: "value1", key2: "value2", key3: ["a,b,c"] };
const jsonString = convertToJSON(myObject1);
console.log(jsonString);
