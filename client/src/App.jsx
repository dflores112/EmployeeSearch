import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EmployeeList from './EmployeeList.jsx';
import SearchForm from './SearchForm.jsx';
import FilterForm from './FilterForm.jsx'
// .includes .lowercase
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
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
    axios.get('');
  }

  filterEmployeeByDepartment(department) {
    axios.get(`api/${department}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    const { employees } = this.state;
    return (
      <>
        <SearchForm searchEmployeeByName={this.searchEmployeeByName} />
        <FilterForm filterEmployeeByDepartment={this.filterEmployeeByDepartment} />
        <EmployeeList employees={employees} />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
