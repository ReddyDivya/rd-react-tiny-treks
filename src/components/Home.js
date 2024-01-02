import React, {useState, useEffect} from 'react';
import Button from "./Button";
import ImageSlider from './ImageSlider';
import PDFGenerator from './PDFGenerator';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Home = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleColorTheme = () => {
        setTheme(theme === 'dark' ?  'light' : 'dark' );
    }

    return (
    <div className={`${theme === 'light' ? 'bg-white' : 'dark:bg-black dark:text-white' } text-center p-4`}>

        <button className='p-2 font-bold text-sm rounded-lg float-right' onClick={toggleColorTheme}>{theme === 'light' ? <FaToggleOff size={35}/> : <FaToggleOn size={35}/>}</button>

        <h1 className={`${theme === 'light' ? 'text-black' : 'dark:text-white'}  text-3xl font-bold`}>React Tiny Trek</h1>
        <i className={`${theme === 'light' ? 'text-slate-800' : 'dark:text-white'} m-2 p-2`}>It comprises small React tasks. Click any button to observe its functionality.</i>
        <div className="grid grid-cols-6 m-6 p-4">
            <Button name="Image Slider"/>
            <Button name="Accordian"/>
            <Button name="Navbar"/>
            <Button name="Excel"/>
            <Button name="Auth0"/>
        </div>

        {/* <ImageSlider/> */}
        <PDFGenerator/>
    </div>)

}

export default Home;