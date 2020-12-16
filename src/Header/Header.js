import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <h1 className="app-title"><Link to='/'>Running Picturades</Link></h1>
        <nav className="nav-bar">
          <ul>
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='/lists'>Lists</Link></li>
            <li className="nav-item"><Link to='/login'>Login</Link></li>
            <li className="nav-item"><Link to='/profile'>Profile</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;