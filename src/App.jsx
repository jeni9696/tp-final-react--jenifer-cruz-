import React from 'react';
import './App.css'; 

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; 
import Tienda from './pages/Tienda'; 
import Favoritos from './pages/Favoritos.jsx';
import Carrito from './pages/Carrito';


function App() {
  return (
    <>
      <Navbar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/carrito" element={<Carrito />} />
          
          <Route path="/tienda/:pokemonId" element={<Tienda />} /> 
        </Routes>
      </div>
      
      <Footer /> 
    </>
  );
}

export default App;