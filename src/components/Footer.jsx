// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
    <div className="f-head">
      <h1>Lets Talk</h1>
      <Link  to="/Contact" className='c-btn'>Connect</Link>
    </div>
    <div className="peer">
      <Link to="/Personal" className='p-h1'>Peer Through My Personal Life</Link>
    </div>
    </div>
  );
};

export default Footer;