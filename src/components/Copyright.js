import React from "react"

const Copyright = props => {
  return (
    <p className="flex justify-end items-baseline"{...props}>Copyright &copy; {new Date().getFullYear()} Benson Anyanime</p>
  )
}

export default Copyright