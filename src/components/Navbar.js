import React from 'react';
import Image from '../components/profile.jpeg';
import './Navbar.css';

const Navbar = () => {
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

export default Navbar
