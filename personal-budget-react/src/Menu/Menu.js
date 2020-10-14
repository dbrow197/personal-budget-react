import React from 'react';

import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <nav>
    <div 
      className="menu" 
      aria-label="navigation menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="login">Login</Link></li>
        </ul>
    </div>
    </nav>
  );
}

export default Menu;
