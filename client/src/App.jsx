import React from 'react';
import ReactDOM from 'react-dom';
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

  render() {
    const { employees } = this.state;
    return (
      <>
        <SearchForm searchEmployeeByName={this.searchEmployeeByName} />
        <FilterForm filterEmployeeByDepartment={this.filterEmployeeByDepartment} getEmployeeData={this.getEmployeeData} />
        <EmployeeList employees={employees} />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
