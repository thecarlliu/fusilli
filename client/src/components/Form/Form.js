import React, { Component } from "react";

import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    dateTime: new Date(), 
    numberofGuests: 1,
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter your name"
          />
          <input
            value={this.state.dateTime}
            name="dateTime"
            onChange={this.handleInputChange}
            type="datetime-local"
          />
          <input
            value={this.state.numberofGuests}
            name="numberofGuests"
            onChange={this.handleInputChange}
            type="number"
            placeholder="Enter nunber of guests"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
