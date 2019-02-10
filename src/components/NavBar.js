import React from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper green darken-3">
        <div className="container">
          <Link className="brand-logo0" to="/">
            Test
          </Link>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/signup">Create account</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
