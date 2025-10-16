import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      
     
      <p style={{ margin: '5px 0', color: 'var(--color-light)' }}>
        &copy; {new Date().getFullYear()} Pokémon Shop - TP Final Integrador UTN.BA  proyecto creado por Cruz Jenifer 
      </p>
      
    
      <p className="fine-print" style={{ fontSize: '0.8rem', opacity: 0.6, color: 'var(--color-light)' }}>
        Desarrollado con React, Redux Toolkit, y PokeAPI.
      </p>
    </footer>
  );
}

export default Footer;