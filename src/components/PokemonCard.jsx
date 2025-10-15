import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorito } from '../store/favoritosSlice'; 

function PokemonCard({ pokemonData }) {
  
  const dispatch = useDispatch();

  const isFavorite = useSelector(state => 
    state.favoritos.list.some(item => item.id === pokemonData.id)
  );

  const pokemonId = pokemonData.id;
  const idDisplay = String(pokemonId).padStart(3, '0');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorito(pokemonData));
  };

  const handleCartAction = () => {
    console.log(`CARRITO clickeada para Pokémon ID: ${pokemonId}`);
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
          onClick={handleToggleFavorite} 
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '1.5em',
            color: isFavorite ? 'red' : 'gray' 
          }}>
          {isFavorite ? '❤️' : '🤍'} 
        </button>
        
        <button 
          onClick={handleCartAction} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>
          🛒
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;