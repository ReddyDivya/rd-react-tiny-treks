import React from 'react'

const ProgressBar = ({progress}) => {

  return (
    <div className="w-full bg-gray-200 rounded-lg m-4">
        <div className="bg-blue-500 text-white py-1 text-center" style={{width: `${progress}%`}}>
            {progress}%
        </div>
    </div>
  )
}

export default ProgressBar