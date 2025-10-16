import React from 'react';
import { Link } from 'react-router-dom';
import Pokebola from '../img/pokebola.png';
import PokemonLogo from '../img/logo.png'; 

function Home() {
  return (
    <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>

      <h1 style={{ fontSize: '3em', marginBottom: '20px', color: 'var(--color-accent)' }}>
        POKÉMON SHOP: INICIO DE OPERACIONES
      </h1>
      
      <img 
        src={Pokebola} 
        alt="Pokébola" 
        style={{ 
          width: '150px', 
          height: '150px', 
          margin: '30px 0',
          opacity: 0.8,
          animation: 'float 3s ease-in-out infinite' 
        }}
      />

      <p style={{ fontSize: '1.2em', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
        Este es el Trabajo Práctico Final que demuestra el dominio de la programación 
        Front-End con React, aplicando gestión de estado avanzada (Redux) y consumo de API asíncrona.
        Explora nuestro catálogo para iniciar tu proceso de compra.
      </p>

      <Link to="/tienda">
        <button 
          style={{ 
            padding: '15px 30px', 
            fontSize: '1.1em',
            backgroundColor: 'var(--color-accent)', 
            color: 'var(--color-dark)',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px var(--color-accent)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          VER CATÁLOGO Y EMPEZAR
        </button>
      </Link>

    </div>
  );
}

export default Home;