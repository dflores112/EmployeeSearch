const db = require('./index.js');

db.drop();

const employee_data = [
  {
    name: 'Beyonce Knowles',
    department: 'Music',
    age: 39,
  },
  {
    name: 'Ryan Reynolds',
    department: 'Film',
    age: 44,
  },
  {
    name: 'Anne Hathaway',
    department: 'Film',
    age: 38,
  },
  {
    name: 'Ki Hong Lee',
    department: 'Film',
    age: 34,
  },
  {
    name: 'David Beckham',
    department: 'Sports',
    age: 45,
  },
  {
    name: 'Camila Cabello',
    department: 'Music',
    age: 23,
  },
  {
    name: 'Serena Williams',
    department: 'Sports',
    age: 39,
  },
];

employee_data.forEach((employee) => {
  db.addEmployee(employee);
});

console.log('Succefully added Employees to Database');
