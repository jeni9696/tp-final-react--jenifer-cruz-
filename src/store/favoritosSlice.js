import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], 
};

export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    toggleFavorito: (state, action) => {
      const pokemon = action.payload; 
      const index = state.list.findIndex(item => item.id === pokemon.id);

      if (index !== -1) {
        // Eliminar si ya existe
        state.list.splice(index, 1);
      } else {
        // Agregar si no existe
        state.list.push(pokemon);
      }
    },
  },
});

export const { toggleFavorito } = favoritosSlice.actions;

export default favoritosSlice.reducer;