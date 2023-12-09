import React from 'react';
import Button from "./Button";
import ImageSlider from './ImageSlider';

const Home = () => {
    return (<div className="text-center m-4 p-4">
        <h1 className="text-3xl text-teal-800">React Tiny Trek</h1>
        <i className="m-2 p-2 text-teal-600">It comprises small React tasks. Click any button to observe its functionality.</i>
        <div className="grid grid-cols-6 m-6 p-4">
            <Button name="Image Slider"/>
            <Button name="Accordian"/>
            <Button name="Navbar"/>
            <Button name="Excel"/>
            <Button name="Auth0"/>
        </div>

        <ImageSlider/>
    </div>)

}

export default Home;