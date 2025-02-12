import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-teal-700 text-white p-2 w-[10rem] ${props.addClass} ${props.className}`} >{props.children}</button>
  )
}

export default Button