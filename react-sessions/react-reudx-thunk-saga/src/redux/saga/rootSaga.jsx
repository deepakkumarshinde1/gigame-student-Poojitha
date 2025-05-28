import { all } from "redux-saga/effects";
import { getUsersWatcher } from "./users.watcher";

export function* rootSaga() {
  let watchers = [getUsersWatcher()];
  yield all(watchers);
}
