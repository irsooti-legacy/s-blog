import { all, takeLatest } from 'redux-saga/effects';

import { authenticationWorker, verifyTokenWorker } from './auth';
import * as actionTypes from '../actions/actionTypes';
import { addPostWorker, retrievePostsWorker } from './posts';

export function* rootSaga() {
  yield all([
    yield takeLatest(actionTypes.AUTHENTICATION_FLOW, authenticationWorker),
    yield takeLatest(actionTypes.VERIFYING_TOKEN_FLOW, verifyTokenWorker),
    yield takeLatest(actionTypes.ADD_POST_FLOW, addPostWorker),
    yield takeLatest(actionTypes.RETRIEVE_POSTS_FLOW, retrievePostsWorker)
  ]);
}
