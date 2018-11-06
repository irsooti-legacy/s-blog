import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/data';

const initialState = {
  addingPostIsPending: false,
  retrievePostsIsPending: false,
  postIdRetrieved: null,
  retrievePostError: '',
  retrievePostIsPending: false,
  post: {},
  all: []
};

function postsToArray(posts) {
  let newPosts = [];

  Object.keys(posts).map((key, i) => {
    Object.keys(posts[key]).map((subKey, subI) => {
      newPosts.push({
        id: subKey,
        authorId: key,
        text: posts[key][subKey].text,
        title: posts[key][subKey].title,
        timestamp: posts[key][subKey].timestamp,
        
      });
      return true;
    });
    return true;
  });

  return newPosts;
}

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
      let posts = postsToArray(action.payload.posts);
      return updateState(state, {
        all: posts
      });

    case actionTypes.RETRIEVE_POSTS_FAILURE:
      return updateState(state, {
        retrievePostsError: action.payload.retrievePostsError
      });

    case actionTypes.RETRIEVE_POST_PENDING:
      return updateState(state, {
        retrievePostIsPending: action.payload.isPending
      });

    case actionTypes.RETRIEVE_POST_SUCCESS:
      return updateState(state, {
        post: action.payload.post
      });

    case actionTypes.RETRIEVE_POST_FAILURE:
      return updateState(state, {
        retrievePostError: action.payload.retrievePostError
      });

    default:
      return state;
  }
};

export default reducer;
