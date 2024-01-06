import React, { useState } from 'react'
import {accordionItems} from "../utils/constants";

const Accordion = ({theme}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleActiveIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-900' : 'dark:bg-gray-900 dark:text-white'} text-center p-2 h-screen`}>
        <h1 className={`${theme === 'light' ? 'bg-white text-gray-500' : 'dark:bg-gray-900 dark:text-gray-400'} font-bold text-3xl m-4`}>Accordion</h1>
        <div>
            {
                accordionItems.map((item, index) => 
                    <div key={index} className={`${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'dark:bg-gray-900'} m-4`}>
                        <button onClick={() => handleActiveIndex(index)} className={`${theme === 'light'
                                ? 'text-gray-500 border-gray-300 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200'
                                : 'dark:border-gray-300 dark:focus:ring-gray-800 dark:text-gray-400 dark:hover:bg-gray-800'
                            } flex items-center justify-between w-full p-5 font-medium rtl:text-right text-xl border border-b-1 rounded-t-xl cursor-pointer focus:ring-4 gap-3`}>                            
                            <span className="flex items-center">{item.title}</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>    
                        </button>
                        {
                            index === activeIndex && (
                            <div className={`${theme === 'light' ? 'border-gray-300' : 'dark:border-gray-300 dark:bg-gray-900'} p-5 border border-b-1`}>

                                <p className={`${theme === 'light' ? 'text-gray-500' : 'dark:text-gray-400 '} mb-2`}>{item.content}</p>
                            </div>)
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Accordion
