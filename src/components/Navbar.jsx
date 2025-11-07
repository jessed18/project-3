import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">✓</span>
          <span className="logo-text">Doable</span>
        </div>
        
      
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'navbar-link active' : 'navbar-link'}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/todos" 
              className={location.pathname === '/todos' ? 'navbar-link active' : 'navbar-link'}
            >
              My Tasks
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'navbar-link active' : 'navbar-link'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;