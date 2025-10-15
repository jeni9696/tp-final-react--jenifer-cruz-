import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Pokémon Shop. Todos los derechos reservados.</p>
    </footer>
  );
}
export default Footer;