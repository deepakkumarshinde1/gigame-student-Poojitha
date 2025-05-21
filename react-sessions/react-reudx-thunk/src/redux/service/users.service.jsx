import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let { data } = await axios.get("/users");
  return data;
});
