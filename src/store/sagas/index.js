import { all, takeLatest } from 'redux-saga/effects';

import * as auth from './auth';
import * as actionTypes from '../actions/actionTypes';
import * as posts from './posts';

export function* rootSaga() {
  yield all([
    yield takeLatest(
      actionTypes.AUTHENTICATION_FLOW,
      auth.authenticationWorker
    ),
    yield takeLatest(actionTypes.VERIFYING_TOKEN_FLOW, auth.verifyTokenWorker),
    yield takeLatest(actionTypes.ADD_POST_FLOW, posts.addPostWorker),
    yield takeLatest(
      actionTypes.RETRIEVE_POSTS_FLOW,
      posts.retrievePostsWorker
    ),
    yield takeLatest(actionTypes.LOGOUT_FLOW, auth.logoutWorker),
    yield takeLatest(actionTypes.SIGN_UP_FLOW, auth.signupWorker),
    yield takeLatest(actionTypes.RETRIEVE_POST_FLOW, posts.retrievePostWorker),
  ]);
}
