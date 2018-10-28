import { put, call } from 'redux-saga/effects';
import {
  addPostSuccessfully,
  addPostPendingStatus,
  addPostFailure,
  retrievePostsIsPending,
  retrievePostsFailure,
  retrievePostsSuccess
} from '../actions/posts';
import { addNewPost, getAllPosts } from '../../api/post';

export function* addPostWorker(action) {
  yield put(addPostPendingStatus(true));
  try {
    // should be post name id

    let token = localStorage.getItem('token');
    let localId = localStorage.getItem('localId');
    // const {text, title} = action.payload;
    console.log(token);

    let response = yield call(addNewPost, token, localId, action.payload);

    console.log(response);

    yield put(addPostSuccessfully(response));
  } catch (err) {
    yield put(addPostFailure('Generic error ' + err));
  } finally {
    yield put(addPostPendingStatus(false));
  }
}

export function* retrievePostsWorker() {
  yield put(retrievePostsIsPending(true));

  try {
    let posts = yield call(getAllPosts);
    yield put(retrievePostsSuccess(posts));
  } catch (err) {
    yield put(retrievePostsFailure(err));
  } finally {
    yield put(retrievePostsIsPending(false));
  }
}
