import React from "react"

const Copyright = props => {
  return (
    <p className="flex justify-center text-white md:text-xl " {...props}>Copyright &copy; {new Date().getFullYear()} Benson Anyanime</p>
  )
}

export default Copyright