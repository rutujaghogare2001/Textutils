import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'; // Importing React and useState correctly
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? 'gray' : 'white';
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
    document.title = `Textutils - ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`;
  };
  
  return (
    <Router>
      <div>
        <Navebar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
