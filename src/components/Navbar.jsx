// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
  return (
    <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        padding: '10px', 
        backgroundColor: '#B4C8FF'
      }}>
      <Link to="/" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/tienda" style={{ color: '#333', textDecoration: 'none' }}>Tienda</Link>
      <Link to="/favoritos" style={{ color: '#333', textDecoration: 'none' }}>Favoritos</Link>
      <Link to="/carrito" style={{ color: '#333', textDecoration: 'none' }}>Carrito</Link>
    </nav>
  );
}

export default Navbar;