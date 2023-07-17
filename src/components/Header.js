import React from 'react';
import Image from '../images/logo.png';
import { Link } from 'gatsby';


const Header = () => {
  return (
    <nav className='m-0 flex justify-between p-2'>
      <img className='h-9 w-8 rounded-full' src={Image} alt='logo' />
      <div className='text-white text-lg space-x-3 mr-6'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
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
