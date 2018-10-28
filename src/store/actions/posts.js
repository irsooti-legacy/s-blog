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

export const retrievePostsFlow = () => {
  return {
    type: actionTypes.RETRIEVE_POSTS_FLOW
  };
};

export const retrievePostsSuccess = posts => {
  return {
    type: actionTypes.RETRIEVE_POSTS_SUCCESS,
    payload: {
      posts
    }
  };
};

export const retrievePostsFailure = retrievePostsError => {
  return {
    type: actionTypes.RETRIEVE_POSTS_FAILURE,
    payload: {
      retrievePostsError
    }
  };
};

export const retrievePostsIsPending = isPending => {
  return {
    type: actionTypes.RETRIEVE_POSTS_PENDING_STATUS,
    payload: {
      isPending
    }
  };
};
