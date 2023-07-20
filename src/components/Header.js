import React from 'react';
import Image from '../images/logo.png';
import NavLink from './NavLink';


const Header = () => {
  return (
    <div className='m-0 flex justify-between p-2 bg-black'>
      <img className='h-9 w-8 rounded-full' src={Image} alt='logo' />      
      <nav className='text-white text-lg space-x-3 mr-6'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Reach Out</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
      {/* <ul>
        <li className='active'><a href='#home'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul> */}
    </nav>
    </div>
   
  )
}

export default Header
