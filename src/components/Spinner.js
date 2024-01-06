import React from 'react'

const Spinner = ({theme}) => {
  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-900' : 'dark:bg-gray-900 dark:text-white'} text-center p-2 h-screen`}>
        <h1 className={`${theme === 'light' ? 'bg-white text-gray-500' : 'dark:bg-gray-900 dark:text-gray-400'} font-bold text-3xl m-4`}>Spinner</h1>
        
        {/* spinner */}
        <div className="flex justify-center items-center">
            {/* Circle spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-solid m-10 "></div>

            {/* Rotating Plane Spinner  */}
            <div className="animate-spin h-12 w-12 border-t-2 border-blue-500 border-solid m-10"></div>

            {/* Double Bounce Spinner*/}
            <div className="animate-bounce w-6 h-6 mx-1 bg-blue-500 rounded-full"></div>
            <div className="animate-bounce w-6 h-6 mx-1 bg-blue-500 rounded-full m-10"></div>
        </div>
    </div>
  )
} 

export default Spinner