import { put, call } from 'redux-saga/effects';
import * as postActions from '../actions/posts';
import { addNewPost, getAllPosts, getPostByUidAndPid } from '../../api/post';

export function* addPostWorker(action) {
  yield put(postActions.addPostPendingStatus(true));
  try {
    // should be post name id

    let token = localStorage.getItem('token');
    let localId = localStorage.getItem('localId');
    // const {text, title} = action.payload;
    console.log(token);

    let response = yield call(addNewPost, token, localId, action.payload);

    console.log(response);

    yield put(postActions.addPostSuccessfully(response));
  } catch (err) {
    yield put(postActions.addPostFailure('Generic error ' + err));
  } finally {
    yield put(postActions.addPostPendingStatus(false));
  }
}

export function* retrievePostsWorker() {
  yield put(postActions.retrievePostsIsPending(true));

  try {
    let posts = yield call(getAllPosts);
    yield put(postActions.retrievePostsSuccess(posts));
  } catch (err) {
    console.log(err.message)
    yield put(postActions.retrievePostsFailure(err));
  } finally {
    yield put(postActions.retrievePostsIsPending(false));
  }
}

export function* retrievePostWorker(action) {
  yield put(postActions.retrievePostPendingStatus(true));

  try {
    let post = yield call(
      getPostByUidAndPid,
      action.payload.userId,
      action.payload.postId
    );
    yield put(postActions.retrievePostSuccess(post));
  } catch (err) {
    yield put(postActions.retrievePostFailure(err));
  } finally {
    yield put(postActions.retrievePostPendingStatus(false));
  }
}
