import { call, put, takeEvery } from 'redux-saga/effects';
import * as common from '../actions/common';
import API from '../../lib/api';

function* runRequestCommon(action) {
  try {
    const { data } = yield call(API.getCommon, action.payload);
    yield put({ type: common.SUCCESS_COMMON, payload: { data } });
  } catch (error) {
    yield put({ type: common.FAILURE_COMMON, payload: { error } });
  }
}

export function* watchHandleRequestCommon() {
  yield takeEvery(common.REQUEST_COMMON, runRequestCommon);
}
