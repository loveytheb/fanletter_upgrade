import { configureStore } from "@reduxjs/toolkit";
import letters from "redux/modules/letters";
import member from "redux/modules/member";
import modal from "redux/modules/modal";
import authSlice from "redux/modules/authSlice";
import userData from "redux/modules/userData";
import letterSlice from "redux/modules/letterSlice";

const store = configureStore({
    reducer: {
        letters : letters,
        letterSlice: letterSlice,
        member : member,
        modal : modal,
        authSlice : authSlice,
        userData : userData,
    },
});

export default store;