const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const db = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/employees', (req, res) => {
  db.retrieveAllEmployees((err, employees) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(employees);
    }
  });
});

app.get('/api/employee/:name', (req, res) => {
  const { name } = req.params;
  db.retrieveEmployeeByName(name, (err, employee) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(employee);
    }
  });
});

app.listen(port, () => {
  console.log(`Employee app listening at http://localhost:${port}`);
});
