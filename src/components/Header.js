import React from 'react';
import './Header.css';
import intro from './Intro'
function Header(){
    return (
        <header className="header">
        <div className="logo">
          <h1>Dipti</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="{intro}">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;