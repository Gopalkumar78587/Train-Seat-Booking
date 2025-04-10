import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import Booking from './Booking';


function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  </Router>
);
  
}

export default App
