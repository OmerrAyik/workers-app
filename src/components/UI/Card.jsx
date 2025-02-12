import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-white max-w-[38rem] mt-8 pb-9 pt-5 rounded-xl mx-auto ${props.className}`} >
        {props.children}
    </div>
  )
}

export default Card