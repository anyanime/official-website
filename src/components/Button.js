import React from 'react'
import {Link } from 'gatsby'

const Button = props => {
  const type = props.type || button
  return (
    <>
    {type === "internal" && (
      <Link {...props}
     className='flex justify-center border border-bh-btn w-full md:w-3/4 py-3 px-6 md:text-xl uppercase rounded-full hover:bg-bh-btn hover:font-medium mt-4'>
       {props.children}
      </Link>
    )}
    {type === "external" && (
      <a
        {...props}
        className="button flex items-center w-max py-3 px-10 font-dosis uppercase text-xl font-bold text-bensonpink hover:text-white"
      >
        {props.children}
      </a>
    )}
    {type === "button" && (
      <button
        {...props}
        className="flex items-center border border-bensonpink w-max py-3 px-10 font-dosis uppercase text-xl font-bold text-bensonpink hover:text-white"
      >
        {" "}
        {props.children}
      </button>
    )}
     
  </>
      
  )
}

export default Button
