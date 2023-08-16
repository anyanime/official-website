import React from 'react';
import NavLink from './NavLink';
// import { slide as Menu } from 'react-burger-menu';
// import { useState } from 'react';


const Header = () => {
  
  // const [open, setOpen] = useState(false);

  // const showSettings = () => {
  //   event.preventDefault();
  //   Your code to show the settings
  // };

  return (
    <div className='flex justify-start items-center text-md position:fixed p-1 md:justify-between'>
      <h1 className='md:ml-3 font-medium text-4xl text-white font-heading'>Anyanime</h1>     
      <nav className=''>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        
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
