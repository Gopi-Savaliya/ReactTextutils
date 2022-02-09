import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode==='light'){
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
      setMode('dark');
    } else {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      setMode('light');
    }
  }

  return (
      <Router>
        <Navbar name="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Form heading="Enter Text Here" mode={mode} toggleMode={toggleMode}/>}/>
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
