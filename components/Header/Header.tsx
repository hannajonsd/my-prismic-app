import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
        <nav>
        <a href="/" className="refresh-link">
          {/* <img src="/Logo.png" alt="HMJ Logo" className="logo" /> */}
        </a>
          <ul className="menu">
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
    );
}

export default Header;
