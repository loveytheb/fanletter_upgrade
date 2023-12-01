import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            return {userLogin: action.payload};
        }
    }
})

export const { setUserLogin } = usersSlice.actions;
export default usersSlice.reducer;