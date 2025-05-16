// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className='nav-name'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Azeem Shaik .
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Professional
        </NavLink>
        <NavLink to="/personal" className={({ isActive }) => (isActive ? 'active' : '')}>
          Personal
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
