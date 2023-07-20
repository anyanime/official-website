import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({children, to}) => {
  return (
    <Link  className='text-white uppercase text-lg space-x-3 mr-6 hover:text-blue ' to={to}>
      {children}
      </Link>
  )
}

export default NavLink
