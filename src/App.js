import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import PDFGenerator from './components/PDFGenerator';
import ImageSlider from './components/ImageSlider';
import ExcelSheet from './components/ExcelSheet';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/pdf-generator" element={<PDFGenerator/>}></Route>
            <Route path="/image-slider" element={<ImageSlider/>}></Route>
            <Route path="/excel-sheet" element={<ExcelSheet/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
