import { createSlice } from "@reduxjs/toolkit";

const initialState = "상연";

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = membersSlice.actions;
export default membersSlice.reducer;