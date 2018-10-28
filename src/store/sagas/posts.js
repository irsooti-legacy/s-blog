import { put, call } from 'redux-saga/effects';
import {
  addPostSuccessfully,
  addPostPendingStatus,
  addPostFailure
} from '../actions/posts';
import { addNewPost } from '../../api/post';

export function* addPostWorker(action) {
  yield put(addPostPendingStatus(true));
  try {
    // should be post name id

    let token = localStorage.getItem('token');
    let localId = localStorage.getItem('localId');

    console.log(token);

    let response = yield call(
      addNewPost,
      token,
      localId,
      action.payload.newPost
    );

    console.log(response);

    yield put(addPostSuccessfully(response));
  } catch (err) {
    yield put(addPostFailure('Generic error ' + err));
  } finally {
    yield put(addPostPendingStatus(false));
  }
}
