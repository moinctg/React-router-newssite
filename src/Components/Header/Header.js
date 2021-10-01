
import React from 'react';
import {
   
    Link
  }
   from "react-router-dom";
  

const Header = () => {
    return (
        <div>
            <h3>Header Section</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Api">Newws</Link>
        </div>
    );
};

export default Header;