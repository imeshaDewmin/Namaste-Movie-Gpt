import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "Gemini",
    initialState: {
        showGeminiSearch: false,
        movieNames: null,
        tmdbMovies: null
    },
    reducers: {
        toggleGeminiSearchView: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addTmdbMovies: (state, action) => {
            const { geminiMovieResults, filteredResults } = action.payload
            state.movieNames = geminiMovieResults;
            state.tmdbMovies = filteredResults;
        },
        clearMovies: (state) => {
            state.movieNames = null;
            state.tmdbMovies = null;
        }
    }
})

export const { toggleGeminiSearchView, addTmdbMovies, clearMovies } = geminiSlice.actions;

export default geminiSlice.reducer;