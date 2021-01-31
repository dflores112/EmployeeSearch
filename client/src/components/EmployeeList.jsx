import React from 'react';

import styled from 'styled-components';

const Table = styled.table`
border-radius: 15px;
`;

const TableHeader = styled.th`
width: 30%;
border: 1px solid #d9dadb;
padding:10px;
text-align: center;
background-color: #f2f3f4;
`;

const TableData = styled.td`
width: 30%;
border: 1px solid #d9dadb;
padding:5px;
text-align: center;
`;

const TableRow = styled.tr`
&:hover {
  background-color: #d9dadb;
}
`;

function EmployeeList(props) {
  const { employees } = props;

  const employeeList = employees.map((employee) => (
    <TableRow key={employee._id}>
      <TableData>{employee.name}</TableData>
      <TableData>{employee.department}</TableData>
      <TableData>{employee.age}</TableData>
    </TableRow>
  ));

  const emptyList = <TableRow><TableData>No employees match your search</TableData></TableRow>;
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Department</TableHeader>
          <TableHeader>Age</TableHeader>
        </TableRow>
        {employeeList.length !== 0 ? employeeList : emptyList}
      </tbody>
    </Table>
  );
}

export default EmployeeList;
