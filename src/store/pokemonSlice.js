import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  nextUrl: "https://pokeapi.co/api/v2/pokemon", 
  isLoading: false,
  error: null, 
};

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons", 
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Error al cargar más Pokémons");
      }
      
      const data = await response.json(); 
      return data; 
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list.push(...action.payload.results); 
      state.nextUrl = action.payload.next; 
    });

    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'Fallo la carga de Pokémons';
    });
  },
});

export default pokemonSlice.reducer;