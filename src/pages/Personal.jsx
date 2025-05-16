// src/pages/Personal.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hobbies from "../components/Hobbies";
import "./personal.css";
const Personal = () => {
  return (
    <div className="page">
      <Navbar />
      
        <Hobbies />
  
    </div>
  );
};

export default Personal;
