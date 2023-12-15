const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 35 },
];
function filterRows(data, condition) {
  return data.filter((row) => condition(row));
}
//exmaple
// Filtering rows where age is greater than 25
const filteredData = filterRows(data, (row) => row.age > 25);
console.log(filteredData);
