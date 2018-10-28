import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/data';

const initialState = {
  addingPostIsPending: false,
  retrievePostsIsPending: false,
  postIdRetrieved: null,
  retrievePostError: '',
  all: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST_PENDING:
      return updateState(state, {
        addingPostIsPending: action.payload.addingPostIsPending
      });

    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        postIdRetrieved: action.payload.postIdRetrieved,
        retrievePostError: ''
      };

    case actionTypes.ADD_POST_FAILURE:
      return updateState(state, {
        retrievePostError: action.payload.retrievePostError
      });

    case actionTypes.RETRIEVE_POSTS_PENDING_STATUS:
      return updateState(state, {
        retrievePostsIsPending: action.payload.isPending
      });

    case actionTypes.RETRIEVE_POSTS_SUCCESS:
      return updateState(state, {
        all: action.payload.posts
      });

    case actionTypes.RETRIEVE_POSTS_FAILURE:
      return updateState(state, {
        retrievePostsError: action.payload.retrievePostsError
      });

    default:
      return state;
  }
};

export default reducer;
