import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import AcneDetectionPage from './pages/AcneDetection';
import ShadesTryOnPage from './pages/ShadesTryOn';
import FeaturesPage from './pages/FeaturesPage'; // Import the Features page
import HealthcarePage from './pages/Healthcare'; // Import the Healthcare page
import Occasions from './pages/Occasions';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path="/acne-detection" element={<AcneDetectionPage />} />
          <Route path="/shades-try-on" element={<ShadesTryOnPage />} />
          <Route path="/features" element={<FeaturesPage />} /> 
          <Route path="/healthcare" element={<HealthcarePage />} /> 
          <Route path="/Occasions" element={<Occasions/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
