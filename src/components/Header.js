import React from 'react';
import './Header.css';
import intro from './Intro';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header className="header">
        <div className="logo">
          <h1>Dipti</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              {/* <a href="{intro}">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              { <a href="#education">Education</a> }
              <Link to="/education">Education</Link>
            </li> */}
            <li>
              {/* <a href="#skills">Skills</a> */}
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              {/* <a href="#projects">Projects</a> */}
              <Link to ="/projects">Projects</Link>
            </li>
            <li>
              {/* <a href="#contact">Contact</a> */}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;