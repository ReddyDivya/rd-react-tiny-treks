import React from 'react'

const Button = ({name, handleClick}) => {
  return (
    <button className="bg-blue-900 text-white m-2 p-2 rounded-lg font-bold w-32"
    onClick={handleClick}>
        {name}
    </button>
  )
}

export default Button