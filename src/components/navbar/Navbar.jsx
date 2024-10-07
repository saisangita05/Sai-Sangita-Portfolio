import React from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import './Navbar.css';
import logo from '../../assets/alphabet_16634105.png';  // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' />
      <ul className='nav-menu'>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <Link to="contact" smooth={true} duration={500} className='nav-connect'>Connect With Me</Link>
    </div>
  );
};

export default Navbar;
