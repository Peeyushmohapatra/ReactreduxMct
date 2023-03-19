import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="subNavbar">
        <ul>
          <Link className="link" to="/home">
            <li>Home</li>
          </Link>
          <Link className="link" to="/product">
            <li>Products</li>
          </Link>
          <Link className="link" to="/users">
            <li>Users</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="link" to="/login">
           <li>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
