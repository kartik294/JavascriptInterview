// Implement a function to convert all the keys in an object to camel case.
function keysToCamelCase(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const camelCaseObj = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      camelCaseObj[camelCaseKey] = keysToCamelCase(obj[key]);
    }
  }

  return camelCaseObj;
}

// Example usage:
const snakeCaseObj = {
  first_name: "John",
  last_name: "Doe",
  contact_info: {
    email_address: "john@example.com",
    phone_number: "123-456-7890",
  },
};

const camelCaseObj = keysToCamelCase(snakeCaseObj);
console.log(camelCaseObj);
