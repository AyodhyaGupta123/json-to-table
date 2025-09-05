const jsonToTable = require('../src/index');

const sampleData = [
  { Name: "Ayodhya", Age: 22, Country: "India" },
  { Name: "Jyoti", Age: 32, Country: "India" },
  { Name: "Priyanka", Age: 25, Country: "India" },
];

console.log(jsonToTable(sampleData));
