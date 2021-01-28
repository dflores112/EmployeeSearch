import React from 'react';

function EmployeeList(props) {
  const { employees } = props;

  const employeeList = employees.map((employee) => (
    <tr key={employee._id}>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.age}</td>
    </tr>
  ));

  const emptyList = <tr><td>No employees match your search</td></tr>;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Age</th>
        </tr>
        {employeeList.length !== 0 ? employeeList : emptyList}
      </tbody>
    </table>
  );
}

export default EmployeeList;
