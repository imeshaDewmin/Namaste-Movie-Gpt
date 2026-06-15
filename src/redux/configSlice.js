import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "Config",
    initialState: {
        selectLanguage: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.selectLanguage = action.payload;
        }
    }
})

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;