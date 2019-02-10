import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    attempt: 0
  };

  handleFormInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  logUserIn = e => {
    //TODO: send request with form data to server for sign in.
  };

  render() {
    return (
      <div className="container">
        <h5>Sign In</h5>
        <form onSubmit={this.logUserIn} className="col s4">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleFormInputChange}
            required="required"
          />
          <button className="waves-effect waves-light btn">Let me in</button>
        </form>
      </div>
    );
  }
}

export default Login;
