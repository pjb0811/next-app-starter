import { call, put, takeEvery } from 'redux-saga/effects';
import * as postAction from '../actions/post';
import API from '../../lib/api';

function* runRequestPost(action) {
  try {
    const { data } = yield call(API.getPost, action.payload);
    yield put({ type: postAction.SUCCESS_POST, payload: { data } });
  } catch (error) {
    yield put({ type: postAction.FAILURE_POST, payload: { error } });
  }
}

export function* watchHandleRequestPost() {
  yield takeEvery(postAction.REQUEST_POST, runRequestPost);
}
