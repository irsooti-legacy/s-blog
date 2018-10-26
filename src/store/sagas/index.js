import { all, takeLatest } from 'redux-saga/effects';

import { authenticationWorker } from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* rootSaga() {
  yield all([
    yield takeLatest(actionTypes.AUTHENTICATION_FLOW, authenticationWorker)
  ]);
}
