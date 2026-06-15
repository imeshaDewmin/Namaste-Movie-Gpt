import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "Gemini",
    initialState: {
        showGeminiSearch: false
    },
    reducers: {
        toggleGeminiSearchView: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        }
    }
})

export const { toggleGeminiSearchView } = geminiSlice.actions;

export default geminiSlice.reducer;