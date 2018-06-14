import { all, fork } from 'redux-saga/effects';
import { watchIncrementAsync, watchDecrementAsync } from './counter';
import { watchHandleRequestPost } from './post';
import { watchHandleRequestCommon } from './common';

export default function* rootSaga() {
  yield all([
    fork(watchIncrementAsync),
    fork(watchDecrementAsync),
    fork(watchHandleRequestPost),
    fork(watchHandleRequestCommon)
  ]);
}
