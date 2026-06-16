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
            const { geminiMovieResults, searchResults } = action.payload
            state.movieNames = geminiMovieResults;
            state.tmdbMovies = searchResults;
        }
    }
})

export const { toggleGeminiSearchView, addTmdbMovies } = geminiSlice.actions;

export default geminiSlice.reducer;