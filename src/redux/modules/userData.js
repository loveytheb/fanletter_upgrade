import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
};

const datasSlice = createSlice({
    name: "datas",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            return {userData: action.payload};
        }
    }
})

export const { setUserData } = datasSlice.actions;
export default datasSlice.reducer;