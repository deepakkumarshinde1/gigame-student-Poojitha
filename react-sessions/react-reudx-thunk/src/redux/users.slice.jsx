import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./service/users.service";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    list: [],
    loading: true,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default UserSlice;
