import * as actionTypes from './actionTypes';

export const addPostFlow = newPost => {
  return {
    type: actionTypes.ADD_POST_FLOW,
    payload: newPost
  };
};

export const addPostSuccessfully = postIdRetrieved => {
  return {
    type: actionTypes.ADD_POST_SUCCESS,
    payload: {
      postIdRetrieved
    }
  };
};

export const addPostFailure = retrievePostError => {
  return {
    type: actionTypes.ADD_POST_FAILURE,
    payload: {
      retrievePostError
    }
  };
};

export const addPostPendingStatus = addingPostIsPending => {
  return {
    type: actionTypes.ADD_POST_PENDING,
    payload: {
      addingPostIsPending
    }
  };
};
