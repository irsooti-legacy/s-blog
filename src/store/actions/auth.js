import {
  AUTHENTICATION_FLOW,
  AUTHENTICATION_FAIL,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_PENDING
} from './actionTypes';

export const beginAuthentication = (email, password) => {
  return {
    type: AUTHENTICATION_FLOW,
    payload: {
      email,
      password
    }
  };
};

export const setAuthenticationStatus = isPending => {
  return {
    type: AUTHENTICATION_PENDING,
    payload: {
      isPending
    }
  };
};

export const authenticationFail = () => {
  return {
    type: AUTHENTICATION_FAIL
  };
};

export const authenticationSuccess = email => {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      user: { email }
    }
  };
};
