import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideoKey: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideoKey: (state, action) => {
            state.trailerVideoKey = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideoKey } = movieSlice.actions;

export default movieSlice.reducer;

