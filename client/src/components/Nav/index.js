import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./Nav.css"; 
function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-links flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-links flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="nav-header flex-row">
      <div className="logo-container">
        <div className="logo-circle"></div>
        <h1>
          <Link to="/">
            JACE
          </Link>
        </h1>
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
