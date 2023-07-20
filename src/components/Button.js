import React from 'react'
import {Link } from 'gatsby'

const Button = () => {
  return (
    <div className='text-white text-center p-2 text-2xl mt-10 bg-blue uppercase rounded-full hover:bg-dark-blue'>
      <button><Link to='/about'>More About Me</Link></button>
    </div>
  )
}

export default Button
