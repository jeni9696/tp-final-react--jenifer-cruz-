import React from 'react';
import './App.css'; 


import { Navbar } from './components/Navbar'; 
import { Footer } from './components/Footer'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      
      {/*Home, Tienda*/}
      <Routes>
          {/* */}
      </Routes>
      
      <Footer /> 
    </>
  );
}

export default App;