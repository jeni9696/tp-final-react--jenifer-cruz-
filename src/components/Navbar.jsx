import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link> | <Link to="/tienda">Tienda</Link> | <Link to="/favoritos">Favoritos</Link> | <Link to="/carrito">Carrito</Link>
    </nav>
  );
}

export default Navbar;