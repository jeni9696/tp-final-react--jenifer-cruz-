import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemonData }) {
  
  const pokemonId = useMemo(() => {
    if (!pokemonData || !pokemonData.url) return null;
    const parts = pokemonData.url.split('/');
    return parts[parts.length - 2]; 
  }, [pokemonData]);
  
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  const idDisplay = pokemonId ? String(pokemonId).padStart(3, '0') : '';

  const handleAction = (actionType) => {
    console.log(`${actionType} clickeada para Pokémon ID: ${pokemonId}`);
  };

  return (
    <div 
      className="pokemon-card" 
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '15px', 
        backgroundColor: 'white',
        boxShadow: '0 3px 6px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}
    >
      <Link to={`/tienda/${pokemonId}`} style={{ textDecoration: 'none', color: '#333' }}>
        
        {pokemonId && (
          <img 
            src={imageUrl} 
            alt={pokemonData.name} 
            style={{ width: '100px', height: '100px', margin: '10px auto' }} 
          />
        )}
        
        <div className='pokemon-info' style={{ marginTop: '10px' }}>
             <span className='pokemon-name' style={{ fontWeight: 'bold', fontSize: '1.1em', display: 'block' }}>
                {pokemonData.name.toUpperCase()}
             </span>
             <span className='pokemon-id' style={{ fontSize: '0.9em', color: '#666' }}>
                #{idDisplay}
             </span>
        </div>
      </Link>
      
      <div className="card-actions" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
        
        <button 
          onClick={() => handleAction('FAVORITO')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'gray' }}>
          🤍
        </button>
        
        <button 
          onClick={() => handleAction('CARRITO')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>
          🛒
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;