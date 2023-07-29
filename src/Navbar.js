import React from 'react';
import '../src/Nav.css';
import logo from './Mark.svg';
import downarrow from './down_arrow.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='leftele'>
        <div className="navbar-image"><img src={logo} alt="Logo" /></div>
      </div>
      <div className='rightele'>
        <p className='member-login'>Member Login</p>
        <div className='Investment-Button'>
          Start Investing <img src={downarrow} alt="Down Arrow" />
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar;
