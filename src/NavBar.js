import React from 'react';
import {Link} from 'react-router-dom';
// import App from './App';

function NavBar() {
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/AboutUs">About Us</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
      <li><Link to="/Suggestions">Suggestions</Link></li>
    </ul>
  );
}

export default NavBar;
