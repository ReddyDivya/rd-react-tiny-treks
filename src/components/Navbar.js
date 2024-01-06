import React from 'react';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = ({toggleColorTheme, theme}) => {

  return (
    <nav className={`${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900'} p-4 flex justify-between items-center border-b border-gray-600 font-medium`}>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden lg:flex justify-between p-4 m-2">
          {/* Left side menu */}
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md text-3xl">
              <Link to="/">React Tiny Trek</Link>
          </li>
        </ul>

        {/* Right side menu */}
        <ul className="flex items-center space-x-4">
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/pdf-generator">PDF Generator</Link>
          </li>
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/excel-sheet">Excel Sheet</Link>
          </li>
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/image-slider">Image Slider</Link>
          </li>
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/accordion">Accordion</Link>
          </li>
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/modal">Modal</Link>
          </li>
          <li className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <Link to="/auth">Auth0</Link>
          </li>
          {/*Dark and light theme */}
          <button className='p-2 font-bold text-sm rounded-lg float-right text-gray-400' onClick={toggleColorTheme}>{theme === 'light' ? <FaToggleOff size={35}/> : <FaToggleOn size={35}/>}</button>
        </ul>
    </nav>
  )
}

export default Navbar
