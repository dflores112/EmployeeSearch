import React from 'react';

function EmployeeList(props) {
  const { employees } = props;

  const employeeList = employees.map((employee) => (
    <div key={employee._id}>
      {' '}
      {employee.name}
      ,
      {' '}
      {employee.department}
      ,
      {' '}
      {employee.age}
    </div>
  ));
  return (
    <div>
      {employeeList}
    </div>
  );
}

export default EmployeeList;
