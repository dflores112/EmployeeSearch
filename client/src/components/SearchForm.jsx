import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { searchEmployeeByName } = this.props;
    const { value } = this.state;
    searchEmployeeByName(value);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Employee name:
        <input type="text" value={value} onChange={this.handleChange} required />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
