import { call, put } from "redux-saga/effects";
import { getUsersService } from "./users.service";
import { saveUsers } from "../users.slice";

export function* getUsersHandler({ payload }) {
  let { data } = yield call(getUsersService, payload);
  yield put(saveUsers([data]));
}
