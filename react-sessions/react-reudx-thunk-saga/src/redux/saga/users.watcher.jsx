import { takeLatest } from "redux-saga/effects";
import { getUsers } from "../users.slice";
import { getUsersHandler } from "./users.handler";

export function* getUsersWatcher() {
  yield takeLatest(getUsers.type, getUsersHandler);
}
