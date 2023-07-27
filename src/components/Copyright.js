import React from "react"

const Copyright = props => {
  return (
    <p className="flex justify-center text-white -mt-6" {...props}>Copyright &copy; {new Date().getFullYear()} Benson Anyanime</p>
  )
}

export default Copyright