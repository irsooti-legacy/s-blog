import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/data';

const initialState = {
  addingPostIsPending: false,
  postIdRetrieved: null,
  retrievePostError: ''
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
      return updateState(state, { retrievePostError: action.payload.retrievePostError });

    default:
      return state;
  }
};

export default reducer;
