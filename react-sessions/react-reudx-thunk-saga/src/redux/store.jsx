import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./users.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

let sagaMiddleware = createSagaMiddleware();
let store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
