import React from 'react';
import { Link } from 'gatsby';


const NavLink = ({children, to}) => {
  return (
      <Link className='text-white uppercase mr-6 lg:text-2xl font-menu hover:text-bh-lime md:inline-flex' to={to}>
        {children}
      </Link>
   
  )
}

export default NavLink
