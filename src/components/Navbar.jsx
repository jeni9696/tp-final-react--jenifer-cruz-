import React from 'react';
import { Link } from 'react-router-dom';
import PokemonLogo from '../img/logo.png'; 

function Navbar() { 
  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-brand">
         <img src={PokemonLogo} alt="Pokémon Shop Logo" className="nav-logo" />
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tienda" className="nav-link">Tienda</Link>
        <Link to="/favoritos" className="nav-link">Favoritos</Link>
        <Link to="/carrito" className="nav-link">Carrito</Link>
      </div>
    </nav>
  );
}

export default Navbar;