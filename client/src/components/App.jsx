import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import EmployeeList from './EmployeeList.jsx';
import SearchForm from './SearchForm.jsx';
import FilterForm from './FilterForm.jsx';

const AppWrap = styled.div`
  height: 100%;
  width:100%;
  background-color: #f2f3f4;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const EmployeeListWrap = styled.div`
  height: 75%;
  width:50%;
  padding: 10px;
  background-color: #fffafa;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  margin: auto;
  border-radius:15px;
  overflow: auto;
  font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const HeaderWrap = styled.span`
  text-align: center;
  font-size: 24px;
  padding:1px;
  height: 5px;
  width: 5px;
  font-weight: 900;
`;

const HorizontalWrap = styled.div`
  margin: auto;
  width: 50%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
    this.getEmployeeData = this.getEmployeeData.bind(this);
    this.searchEmployeeByName = this.searchEmployeeByName.bind(this);
    this.filterEmployeeByDepartment = this.filterEmployeeByDepartment.bind(this);
    this.filterEmployeeByAge = this.filterEmployeeByAge.bind(this);
  }

  componentDidMount() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    axios.get('/api/employees')
      .then((res) => this.setState({ employees: res.data }))
      .catch((err) => console.log(err));
  }

  searchEmployeeByName(name) {
    axios.get(`/api/employee/${name}`)
      .then((res) => this.setState({ employees: res.data }))
      .catch((err) => console.log(err));
  }

  filterEmployeeByDepartment(department) {
    axios.get(`api/departments/${department}`)
      .then((res) => this.setState({ employees: res.data }))
      .catch((err) => console.log(err));
  }

  filterEmployeeByAge(preference) {
    const { employees } = this.state;
    if (preference === 'ascending') {
      const newState = employees.sort((a, b) => a.age - b.age);
      this.setState({ employees: newState });
    } else {
      const newState = employees.sort((a, b) => b.age - a.age);
      this.setState({ employees: newState });
    }
  }

  render() {
    const { employees } = this.state;
    return (
      <AppWrap>
        <EmployeeListWrap>
          <HeaderWrap>
            <div> Employee Database </div>
          </HeaderWrap>
          <HorizontalWrap>
            <SearchForm searchEmployeeByName={this.searchEmployeeByName} />
            <FilterForm filterEmployeeByDepartment={this.filterEmployeeByDepartment} getEmployeeData={this.getEmployeeData} filterEmployeeByAge={this.filterEmployeeByAge} />
            <EmployeeList employees={employees} />
          </HorizontalWrap>
        </EmployeeListWrap>
      </AppWrap>
    );
  }
}

export default App;
