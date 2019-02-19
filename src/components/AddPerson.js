import React from "react";
class AddPerson extends React.Component {
  /* This code produces a simple form with 3 fields to collect input from the user. 
  It receives the method addNewPerson from Home component via the props and invokes 
  it when a valid submission is triggered. It will take the form data and use it to 
  create a person in the state of Home component. 
  */
  state = {
    name: "",
    age: "",
    sex: ""
  };
  handleFormInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addNewPerson = e => {
    e.preventDefault();
    this.props.addNewPerson(
      Math.floor(Math.random() * (100000 - 100 + 1)) + 100,
      this.state.name,
      this.state.age,
      this.state.sex
    );
    //clear the form inputs
    this.setState({
      name: "",
      age: "",
      sex: ""
    });
  };
  render() {
    return (
      <div className="col s4">
        <h5>Create a person</h5>
        <form onSubmit={this.addNewPerson}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <label htmlFor="age">Age :</label>
          <input
            type="number"
            id="age"
            value={this.state.age}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <label htmlFor="sex">Sex :</label>
          <input
            type="text"
            id="sex"
            value={this.state.sex}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <button className="waves-effect waves-light btn">Add person</button>
        </form>
      </div>
    );
  }
}

export default AddPerson;
