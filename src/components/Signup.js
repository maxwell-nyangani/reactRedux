import React from "react";

class Signup extends React.Component {
  state = {
    username: "",
    password1: "",
    password2: ""
  };
  createUserAccount = e => {};
  handleFormInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h5>Create Account now</h5>
        <form onSubmit={this.createUserAccount} className="col s4">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <label htmlFor="password1">Password :</label>
          <input
            type="password"
            id="password1"
            value={this.state.password1}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <label htmlFor="password2">Repeat your password :</label>
          <input
            type="password"
            id="password2"
            value={this.state.password2}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <button className="waves-effect waves-light btn">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
