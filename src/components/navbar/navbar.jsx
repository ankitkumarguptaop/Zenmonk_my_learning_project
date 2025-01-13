import React from "react";
import "./navbar.css";
const Navbar = ({ name, email, password }) => {
  return (
    <div className="home-navbar">
      <div className="navbar-text">Welcome: {name}</div>
      <div className="navbar-text">Email is: {email}</div>
      <div className="navbar-text">Password is: {password}</div>
    </div>
  );
};

export default Navbar;
