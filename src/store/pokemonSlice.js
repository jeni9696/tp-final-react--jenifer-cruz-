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
      // Primer fetch para obtener la lista de URLs y la URL de la siguiente página
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Error en el fetch inicial de la lista.");
      }
      
      const data = await response.json(); 

      // Segundo fetch: Cargar los detalles completos de cada Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          if (!res.ok) throw new Error("Error al obtener detalles del Pokémon.");
          return res.json();
        })
      );
      
      // Devolvemos los detalles de los Pokémon y la URL de la siguiente página
      return { 
          results: detailedPokemons,
          next: data.next 
      };
      
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

