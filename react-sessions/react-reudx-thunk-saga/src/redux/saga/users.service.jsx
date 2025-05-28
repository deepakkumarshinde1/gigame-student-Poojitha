// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// export const getUsers = createAsyncThunk("users/getUsers", async () => {
//   let { data } = await axios.get("/users");
//   return data;
// });

export const getUsersService = (id) => {
  return axios.get("/users/" + id);
};

// worker
// service => api
// handler* => call(service) , put(saveData)
// watcher* => takeLatest & takeEvery(action.type,handler)
// rooSaga* => all([watchers])
