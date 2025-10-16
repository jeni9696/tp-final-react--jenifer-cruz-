import React from 'react';
import { NavLink } from 'react-router-dom'; 
import PokemonLogo from '../img/logo.png'; 

function Navbar() { 
  return (
    <nav className="navbar-container">
      <NavLink to="/" className="nav-brand">
         <img src={PokemonLogo} alt="Pokémon Shop Logo" className="nav-logo" />
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/tienda" className="nav-link">Tienda</NavLink>
        <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>
        <NavLink to="/carrito" className="nav-link">Carrito</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;