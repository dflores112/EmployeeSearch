import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EmployeeList from './EmployeeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    axios.get('/api/employees')
      .then((res) => this.setState({ employees: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { employees } = this.state;
    return (
      <EmployeeList employees={employees} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
