import React from 'react';
import NavLink from './NavLink';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import Button from './Button';


const Bars = ({children}) => {
  const [open, setOpen] = useState(false, 'hidden');
  const [value, setValue] = useState(<FaBars/>)

  const openMenu = () => {
    setValue(<FaTimes />); 
    setOpen(true);
  
  }
  const closeMenu = () => {
    setValue(<FaBars />);
    setOpen(false);  
  
  };


  return (
    <div className=' flex justify-between text-md p-1 md:justify-between h-full bg-opacity-90 md:h-auto'>
      <h1 className='md:ml-3 font-medium text-4xl text-white font-heading'>Anyanime</h1> 
       {open ? ( 
            <div className='flex flex-col items-end'>
              <Button type='external' onClick={closeMenu}>
              {value}
              </Button>
              <nav className='flex justify-center items-end flex-col md:inline-flex'>
              {children}
              </nav>
            </div>
        ) : (
            <div>
              <nav className='hidden md:inline-flex'>
                {children}
              </nav>
                <Button type='external' onClick={openMenu}>
                {value}
                </Button>
            </div>
        )}
    </div>
  )
 
};

const Header = () => {  
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(<FaBars/>);


  // const openMenu = () => {
  //       setValue(<FaTimes />); 
  //       setOpen(true);
  //         }

  //     const closeMenu = () => {
  //       setValue(<FaBars />);
  //       setOpen(false);
  //     }

  return (
    
    <Bars>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>       
    </Bars>   

    // <div className='flex justify-between h-full text-md p-1 md:justify-between'>
    // <h1 className='md:ml-3 font-medium text-4xl text-white font-heading'>Anyanime</h1>     
    // <nav className='flex justify-center flex-col md:flex-row'>
    //   <NavLink to='/'>Home</NavLink>
    //   <NavLink to='/about'>About</NavLink>
    //   <NavLink to='/portfolio'>Portfolio</NavLink>
    //   <NavLink to='/contact'>Contact</NavLink>
    //   {/* <Button type='external' onClick={closeMenu}>
    //     {value}
    //   </Button> */}

    // </nav>
    // <Button type='external' onClick={openMenu}>
    //   {value}
    // </Button>
    // </div>
  )
}

export default Header
