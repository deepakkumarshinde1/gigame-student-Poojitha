import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./users.slice";

let store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
});

export default store;
