import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/carritoSlice'; 
import { toggleFavorito } from '../store/favoritosSlice';

function PokemonDetalle() {
  const { pokemonId } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pokemonData, setPokemonData] = useState(undefined);
  const [error, setError] = useState(null);
  
  const isFavorite = useSelector(state => 
    pokemonData ? state.favoritos.list.some(item => item.id === pokemonData.id) : false
  );

  useEffect(() => {
    if (!pokemonId) return;

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
    const fetchDetail = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Pokémon no encontrado.");
        const data = await response.json(); 
        
        const speciesResponse = await fetch(data.species.url);
        if (!speciesResponse.ok) throw new Error("Descripción de especie fallida.");
        const speciesData = await speciesResponse.json();

        const pokemonCompleto = { ...data, species: speciesData };
        setPokemonData(pokemonCompleto);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchDetail();
  }, [pokemonId]); 


  const handleAddToCart = () => {
    if (pokemonData) dispatch(addToCart(pokemonData));
  };
  
  const handleToggleFavorite = () => {
    if (pokemonData) dispatch(toggleFavorito(pokemonData));
  };


  if (pokemonData === undefined || error) {
    return <h2 style={{ padding: '20px', textAlign: 'center' }}>{error ? `Error: ${error}` : "Cargando detalles..."}</h2>;
  }
  
  const idDisplay = String(pokemonData.id).padStart(3, '0');
  const officialArtUrl = pokemonData.sprites.other['official-artwork'].front_default;
  
  const descriptionEntry = pokemonData.species.flavor_text_entries.find(
      (entry) => entry.language.name === 'es'
  );
  const descriptionText = descriptionEntry ? descriptionEntry.flavor_text : 'Descripción no disponible en español.';

  const dummyPrice = 500; 

  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button 
          onClick={() => navigate('/tienda')} 
          style={{ float: 'left', marginBottom: '20px', padding: '8px 15px', backgroundColor: '#B4C8FF', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          ← Volver a la Tienda
        </button>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={officialArtUrl} alt={pokemonData.name} style={{ width: '250px', height: '250px', marginBottom: '15px' }} />
        <h1>{pokemonData.name.toUpperCase()} - <span style={{ color: '#666' }}>#{idDisplay}</span></h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        <div>
            <h3>Descripción</h3>
            <p style={{ fontStyle: 'italic', padding: '10px 0' }}>{descriptionText}</p>
            
            <h3>Tipos</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                {pokemonData.types.map((type) => (
                    <span key={type.type.name} style={{ padding: '5px 10px', backgroundColor: '#B4C8FF', borderRadius: '5px', textTransform: 'uppercase', fontSize: '0.9em' }}>
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>

        <div>
            <h3>Estadísticas Base</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {pokemonData.stats.map(stat => (
                    <li key={stat.stat.name} style={{ margin: '5px 0' }}>
                        <strong>{stat.stat.name.toUpperCase()}:</strong> {stat.base_stat}
                    </li>
                ))}
            </ul>

            <h3 style={{ marginTop: '20px' }}>Precio y Acciones</h3>
             <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                 {`₽ ${dummyPrice}.00`}
             </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <button
                    onClick={handleToggleFavorite}
                    style={{ color: isFavorite ? 'red' : 'gray', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.5em' }}>
                    {isFavorite ? " Quitar" : "❤️ Favoritos"}
                </button>
                <button
                    onClick={handleAddToCart}
                    style={{ padding: '10px 20px', backgroundColor: '#B4C8FF', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                    🛒 Agregar al Carrito
                </button>
            </div>
        </div>
      </div>
    </main>
  );
}

export default PokemonDetalle;