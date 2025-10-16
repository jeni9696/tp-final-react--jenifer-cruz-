import React, { useEffect } from 'react';
import './App.css'; 

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'; 
import Tienda from './pages/Tienda.jsx'; 
import Favoritos from './pages/Favoritos.jsx';
import Carrito from './pages/Carrito.jsx';
import PokemonDetalle from './pages/PokemonDetalle.jsx';

import FondoDePantalla from './img/fondo.png'; 

function App() {
    
    useEffect(() => {
        document.body.style.backgroundImage = `url(${FondoDePantalla})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundPosition = 'center';
        
        
    }, []);

    return (
        <>
            <Navbar />
            
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tienda" element={<Tienda />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/tienda/:pokemonId" element={<PokemonDetalle />} /> 
                </Routes>
            </div>
            
            <Footer /> 
        </>
    );
}

export default App;