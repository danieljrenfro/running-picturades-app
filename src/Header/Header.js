import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PicturadesContext from '../Contexts/PicturadesContext';
import TokenService from '../services/token-service';

import './Header.css';

class Header extends Component {

  static contextType = PicturadesContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.toggleUserLoggedIn();
  }
  
  renderLogoutLink() {
    return (
      <li className="nav-item logout">
        <Link 
          onClick={this.handleLogoutClick} 
          to='/'
        >
          Logout
        </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
      <>
        <li className="nav-item"><Link to='/login'>Login</Link></li>
        <li className="nav-item"><Link to='/register'>Register</Link></li>
      </>
    )
  }


  render() {
    return (
      <header>
        <h1 className="app-title"><Link to='/'>Running Picturades</Link></h1>
        <nav className="nav-bar">
          <ul>
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='/lists'>Lists</Link></li>
            {this.context.isLoggedIn
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;