const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employeeData', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  age: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

function addEmployee(employee) {
  const person = new Employee({
    name: employee.name,
    department: employee.department,
    age: employee.age,
  });
  person.save((err) => {
    if (err) {
      console.log(err);
    }
  });
}

function drop() {
  db.dropDatabase();
}

function retrieveAllEmployees(callback) {
  Employee.find({}, (err, employees) => {
    if (err) {
      callback(err);
    } else {
      callback(null, employees);
    }
  });
}

function retrieveEmployeeByName(name, callback) {
  console.log(name)
  Employee.find({ name: new RegExp(name, 'i') }, (err, employee) => {
    if (err) {
      callback(err);
    } else if (employee === '') {
      console.log(employee)
      callback(err);
    } else {
      console.log(employee)
      callback(null, employee);
    }
  }).stream();
}

module.exports = {
  addEmployee, drop, retrieveAllEmployees, retrieveEmployeeByName,
};
