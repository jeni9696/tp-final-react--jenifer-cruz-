import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice'; 
import favoritosReducer from './favoritosSlice'; 

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    favoritos: favoritosReducer,
  },
});

export default store;
