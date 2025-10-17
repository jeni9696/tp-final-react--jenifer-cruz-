import { createSlice } from "@reduxjs/toolkit";

export const calcularPrecioIntegrado = (pokemonData) => {
    if (!pokemonData || !pokemonData.moves) return 10; 

    const totalMoves = pokemonData.moves.length;
    const factorDeEscala = 3; 

    const finalPrice = Math.round(totalMoves * factorDeEscala);

    return Math.max(15, finalPrice); 
};


const initialState = {
  list: [],
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newPokemon = action.payload; 
      const existingItem = state.list.find(item => item.pokemon.id === newPokemon.id);

      if (existingItem) {
        existingItem.cantidad += 1;
      } else {
        const precioUnitario = calcularPrecioIntegrado(newPokemon); 
        
        state.list.push({ 
            pokemon: newPokemon, 
            cantidad: 1,
            precioUnitario: precioUnitario
        });
      }
    },

    updateQuantity: (state, action) => {
      const { id, change } = action.payload; 
      const existingItem = state.list.find(item => item.pokemon.id === id);

      if (existingItem) {
        existingItem.cantidad += change;
        
        if (existingItem.cantidad <= 0) {
           state.list = state.list.filter(item => item.pokemon.id !== id);
        }
      }
    },
    
    removeFromCart: (state, action) => {
      const pokemonId = action.payload;
      state.list = state.list.filter(item => item.pokemon.id !== pokemonId); 
    },
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = carritoSlice.actions;

export default carritoSlice.reducer;