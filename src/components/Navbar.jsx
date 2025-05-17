// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-name">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Azeem Shaik .
        </NavLink>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/" onClick={() => setMenuOpen(false)}>Professional</NavLink>

        <NavLink
          to="/personal"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Personal
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
