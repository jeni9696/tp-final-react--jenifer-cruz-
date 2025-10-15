import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice'; 
import favoritosReducer from './favoritosSlice'; 
import carritoReducer from './carritoSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    favoritos: favoritosReducer,
    carrito: carritoReducer,
  },
});

export default store;
