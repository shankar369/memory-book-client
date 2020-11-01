import React from "react";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
