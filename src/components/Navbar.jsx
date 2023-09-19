import React from 'react';
import { NavLink } from "react-router-dom"

import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
       <div className='line'></div>
      <ul className="navbar-list flex">
        <li className="item"><NavLink to='/' className="link">00  Home</NavLink></li>
        <li className="item"><NavLink to='/destination' className="link">01  Destination</NavLink></li>
        <li className="item"><NavLink to='/crew' className="link">02  Crew</NavLink></li>
        <li className="item"><NavLink to='/about' className="link">03  About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
