import React from 'react';
import Image from '../components/profile.jpeg';
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <img className='h-7 w-6 rounded-full ' src={Image} alt='logo' />
        <ul className='text-white flex justify-between items-center gap-10 pr-6 uppercase'>
          <li className='active'><a className='hover:text-blue-600' href='#home'>Home</a></li>
          <li><a className='hover:text-blue-600' href='#about'>About</a></li>
          <li><a className='hover:text-blue-600' href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
