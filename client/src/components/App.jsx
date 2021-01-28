import React from 'react';
import axios from 'axios';

import EmployeeList from './EmployeeList.jsx';
import SearchForm from './SearchForm.jsx';
import FilterForm from './FilterForm.jsx';

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
      <>
        <SearchForm searchEmployeeByName={this.searchEmployeeByName} />
        <FilterForm filterEmployeeByDepartment={this.filterEmployeeByDepartment} getEmployeeData={this.getEmployeeData} filterEmployeeByAge={this.filterEmployeeByAge} />
        <EmployeeList employees={employees} />
      </>
    );
  }
}

export default App;