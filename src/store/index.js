import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    // Aquí se agregarán  pokemons, carrito, favoritos
  },
});

export default store;