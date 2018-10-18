import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/data';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.AUTHENTICATION_FLOW:
    //   return updateState(state, {
    //     credentials: {
    //       email: action.payload.email,
    //       password: action.payload.password
    //     }
    //   });
    case actionTypes.AUTHENTICATION_SUCCESS:
      return updateState(state, {
        isAuthenticated: true,
        user: {
          ...state.user,
          ...action.payload.user
        }
      });
    case actionTypes.AUTHENTICATION_FAIL:
      return updateState(state, {
        isAuthenticated: false
      });
    default:
      console.log(action.type);

      return state;
  }
};

export default reducer;
