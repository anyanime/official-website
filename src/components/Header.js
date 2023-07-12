import React from 'react';
import Image from '../images/logo.png';
import './Navbar.css';

const Header = () => {
  return (
    <nav className='nav'>
      <img src={Image} alt='logo' />
      <ul>
        <li className='active'><a href='#home'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Header
