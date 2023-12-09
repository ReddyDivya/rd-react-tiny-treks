import React, {useState, useEffect} from 'react';
import {images} from "../utils/constants";
import Button from './Button';

const ImageSlider = () => {
    const [data, setData] = useState(0);

    const handlePreviousImage = () => {
        setData(data <= 0 ? images.length-1 : data-1)
    }

    const handleNextImage = () => {
        setData(data >= images.length-1 ? 0 : data+1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextImage();
        }, 5000)

        return(() => {
            clearTimeout(timer);
        })

    }, [data])

  return (
    <div className="">
        <h2 className="text-center text-2xl m-4 p-4 font-bold">Image Slider</h2>
            <Button name="<< Previous" handleClick={handlePreviousImage}/>
            <div className="flex justify-center">
                {
                    images.map((url, index) => 
                        <img key={index} src={url} 
                        alt={`wallpaper ${index + 1}`} 
                        className={`h-96 w-96 object-cover center mx-auto
                         ${+ data === index ? 'block' : 'hidden'}`} 
                        />
                    )
                }
            </div>    
            <Button name="Next >> " handleClick={handleNextImage}/>
    </div>
  )
}

export default ImageSlider