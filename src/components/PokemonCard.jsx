import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorito } from '../store/favoritosSlice'; 
import { addToCart } from '../store/carritoSlice'; 

function PokemonCard({ pokemonData }) {
  
  const dispatch = useDispatch();

  const isFavorite = useSelector(state => 
    state.favoritos.list.some(item => item.id === pokemonData.id)
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorito(pokemonData));
  };
  
  const handleAddToCart = () => {
    dispatch(addToCart(pokemonData));
    console.log(`Pokémon ${pokemonData.name} añadido al carrito.`);
  };

  const pokemonId = pokemonData.id;
  const idDisplay = String(pokemonId).padStart(3, '0');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

  return (
    <div 
      className="pokemon-card" 
      style={{ 
        border: '2px solid var(--color-mid)', /* Borde más visible */
        borderRadius: '15px', 
        padding: '20px', 
       backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.8)', /* Sombra profunda */
        textAlign: 'center',
        transition: 'all 0.3s ease',
        animation: 'float 4s ease-in-out infinite' /* Animación de levitación */
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px var(--color-accent), 0 0 30px var(--color-accent)'} /* Resplandor al entrar */
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.8)'} /* Retorna la sombra */
    >
      <Link to={`/tienda/${pokemonId}`} style={{ textDecoration: 'none', color: 'var(--color-light)' }}>
        
        {pokemonId && (
          <img 
            src={imageUrl} 
            alt={pokemonData.name} 
            style={{ width: '120px', height: '120px', margin: '10px auto', filter: 'drop-shadow(0 0 5px var(--color-accent))' }} /* Resplandor en la imagen */
          />
        )}
        
        <div className='pokemon-info' style={{ marginTop: '10px' }}>
             <span className='pokemon-name' style={{ fontWeight: 'bold', fontSize: '1.2em', display: 'block', color: 'var(--color-accent)' }}>
                {pokemonData.name.toUpperCase()}
             </span>
             <span className='pokemon-id' style={{ fontSize: '1em', color: 'var(--color-light)' }}>
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
            fontSize: '1.8em',
            color: isFavorite ? 'var(--color-red)' : 'var(--color-light)',
            transition: 'color 0.3s'
          }}>
          {isFavorite ? '❤️' : '🤍'} 
        </button>
        
        <button 
          onClick={handleAddToCart} 
          style={{ 
            padding: '8px 15px', 
            backgroundColor: 'var(--color-accent)', 
            color: 'var(--color-dark)', 
            border: 'none', 
            cursor: 'pointer', 
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, box-shadow 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 10px var(--color-accent)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          🛒 Añadir
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;