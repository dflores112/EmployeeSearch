import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Film' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Your favorite flavor is: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    const {value} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter employees by department:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Film">Film</option>
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FilterForm;
