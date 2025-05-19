import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Naboo from './pages/Naboo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/naboo' element={<Naboo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
