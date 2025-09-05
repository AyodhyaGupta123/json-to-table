// In future, you can add Jest or Mocha tests here.
const jsonToTable = require('../src/index');

const data = [
  { Name: "Ayodhya", Age: 25 },
  { Name: "Jyoti", Age: 30 },
];

console.log("Test Output:", jsonToTable(data));
