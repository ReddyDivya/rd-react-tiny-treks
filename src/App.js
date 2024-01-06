import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import PDFGenerator from './components/PDFGenerator';
import ImageSlider from './components/ImageSlider';
import ExcelSheet from './components/ExcelSheet';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {
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
    <Router>
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900'}`}>
          <Navbar toggleColorTheme={toggleColorTheme} theme={theme}/>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/pdf-generator" element={<PDFGenerator/>}></Route>
            <Route path="/image-slider" element={<ImageSlider/>}></Route>
            <Route path="/accordion" element={<Accordion toggleColorTheme={toggleColorTheme} theme={theme}/>}></Route>
            <Route path="/excel-sheet" element={<ExcelSheet/>}></Route>
            <Route path="/spinner" element={<Spinner theme={theme}/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
