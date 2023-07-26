import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({children, to}) => {
  return (
    <Link className='text-white uppercase lg:text-2xl space-x-3 mr-6 hover:text-bh-lime ' to={to}>
      {children}
      </Link>
  )
}

export default NavLink
