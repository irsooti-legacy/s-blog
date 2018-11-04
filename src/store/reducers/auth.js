import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/data';

const initialState = {
  isPending: false,
  isSigninUp: false,
  isAuthenticated: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.AUTHENTICATION_SUCCESS:
      return updateState(state, {
        isAuthenticated: true,
        user: {
          ...state.user,
          ...action.payload.user
        }
      });
    case actionTypes.SIGN_UP_FAILURE:
    case actionTypes.AUTHENTICATION_FAIL:
      return updateState(state, {
        isAuthenticated: false
      });

    case actionTypes.LOGOUT:
      return updateState(state, {
        isAuthenticated: false,
        user: {}
      });

    case actionTypes.AUTHENTICATION_PENDING:
      return updateState(state, { isPending: action.payload.isPending });

    case actionTypes.SIGN_UP_PENDING:
      return updateState(state, { isSigninUp: action.payload.isPending });

    default:
      return state;
  }
};

export default reducer;
