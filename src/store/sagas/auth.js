import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* test() {
  yield delay(1000);
  yield put({ type: 'Test' });
}

export function* authenticateAsync() {
  yield takeEvery('TEST', test);
}
