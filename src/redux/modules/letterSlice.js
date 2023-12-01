import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    letters: [],
    isLoading: false,
    error: null,
};

export const __getLetters = createAsyncThunk(
    "letters/getLetters",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`http://localhost:4000/letters`);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const lettersSlice = createSlice({
    name: "letters",
    initialState,
    reducers: {},
    extraReducers: {
        [__getLetters.pending]: (state) => {
            state.isLoading = true;
        },
        [__getLetters.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.letters = action.payload;
        },
        [__getLetters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = lettersSlice.actions;
export default lettersSlice.reducer;