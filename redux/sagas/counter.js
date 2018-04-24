import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import * as counter from "../actions/counter";

export function* incrementAsync() {
  // yield delay(1000);
  yield put({ type: counter.INCREMENT });
}

export function* decrementAsync() {
  // yield delay(1000);
  yield put({ type: counter.DECREMENT });
}

export function* watchIncrementAsync() {
  yield takeEvery(counter.INCREMENT_ASYNC, incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery(counter.DECREMENT_ASYNC, decrementAsync);
}
