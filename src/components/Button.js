import React from 'react'

const Button = ({name, handleClick, css}) => {
  return (
    <button className={`${css} bg-blue-900 text-white m-2 p-2 rounded-lg font-bold w-32 h-10`}
    onClick={handleClick}>
        {name}
    </button>
  )
}

export default Button