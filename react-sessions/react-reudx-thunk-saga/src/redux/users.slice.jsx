import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    list: [],
    loading: true,
    error: "",
  },
  reducers: {
    getUsers() {},
    saveUsers(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export default UserSlice;
export const { getUsers, saveUsers } = UserSlice.actions;
