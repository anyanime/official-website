import React from 'react';
import Image from '../images/logo.png';
import './Navbar.css';
import { Link } from 'gatsby';


const Header = () => {
  return (
    <nav className='nav'>
      <img src={Image} alt='logo' />
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>Abou</Link>
        <Link to='/contact'>Reach Out</Link>
        <Link to='/portfolio'>Portfolio</Link>
      </div>
      {/* <ul>
        <li className='active'><a href='#home'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul> */}
    </nav>
  )
}

export default Header
