import { call, put } from "redux-saga/effects";
import { getUsersService } from "./users.service";
import { saveUsers } from "../users.slice";

export function* getUsersHandler({ payload }) {
  try {
    let { data } = yield call(getUsersService, payload);
    yield put(saveUsers([data]));
  } catch (error) {
    console.log(error);
  }
}
