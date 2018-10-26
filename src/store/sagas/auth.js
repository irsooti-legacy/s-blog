import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import { postAuthentication } from '../../api/auth';
import { AUTHENTICATION_FLOW } from '../actions/actionTypes';
import {
  authenticationSuccess,
  authenticationFail,
  setAuthenticationStatus
} from '../actions/auth';

export function* authenticationWorker(action) {
  yield put(setAuthenticationStatus(true));

  try {
    let response = yield call(
      postAuthentication,
      action.payload.email,
      action.payload.password
    );
    yield localStorage.setItem('refreshToken', response.refreshToken);
    yield put(authenticationSuccess(response.email));
  } catch (err) {
    yield put(authenticationFail());
  } finally {
    yield put(setAuthenticationStatus(false));
  }
}