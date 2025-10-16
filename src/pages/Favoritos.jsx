import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from '../components/PokemonCard';

function Favoritos() {
  const { list: favoritosList } = useSelector((state) => state.favoritos);

  if (favoritosList.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', maxWidth: '600px', margin: '50px auto', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2>Mis Pokémon Favoritos</h2>
        <p>¡Aún no has marcado ningún Pokémon como favorito! </p>
        <p>Ve a la Tienda y selecciona el ícono de corazón para añadirlos.</p>
      </div>
    );
  }

  return (
    <div className="favoritos-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Mis Pokémon Favoritos ({favoritosList.length})</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginTop: '20px'
      }}>
        {favoritosList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemonData={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;