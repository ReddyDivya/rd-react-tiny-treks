import React from 'react'

const Modal = ({theme}) => {
  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-900' : 'dark:bg-gray-900 dark:text-white'} text-center p-2 h-screen`}>
        <h1 className={`${theme === 'light' ? 'bg-white text-gray-500' : 'dark:bg-gray-900 dark:text-gray-400'} font-bold text-3xl m-4`}>Modal</h1>

    </div>
  )
}

export default Modal