import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/pokemonSlice';
import PokemonCard from '../components/PokemonCard';

function Tienda() {
  const dispatch = useDispatch();
  const { list, isLoading, error, nextUrl } = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchPokemons(nextUrl));
    }
  }, [dispatch, list.length, nextUrl]); 

  const handleLoadMore = () => {
    if (nextUrl && !isLoading) {
      dispatch(fetchPokemons(nextUrl));
    }
  };

  if (error) {
    return <h2 style={{ color: 'red', padding: '20px' }}>Error: {error}</h2>;
  }
  if (list.length === 0 && !isLoading) {
    return <h2 style={{ padding: '20px', textAlign: 'center' }}>No hay Pokémons disponibles.</h2>;
  }

  return (
    <div className="tienda-container" style={{ padding: '20px' }}>
      <h2>Tienda Pokémon (Pokémons cargados: {list.length})</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {list.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonData={pokemon} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {isLoading ? (
          <p>Cargando más Pokémons...</p>
        ) : nextUrl ? (
          <button 
            onClick={handleLoadMore} 
            style={{ padding: '10px 20px', backgroundColor: '#B4C8FF', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
            Cargar Más
          </button>
        ) : (
          <p>¡Todos los Pokémons disponibles cargados!</p>
        )}
      </div>
    </div>
  );
}

export default Tienda;