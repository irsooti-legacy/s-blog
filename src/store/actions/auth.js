import * as actionTypes from './actionTypes';

export const beginAuthentication = (email, password) => {
  return {
    type: actionTypes.AUTHENTICATION_FLOW,
    payload: {
      email,
      password
    }
  };
};

export const setAuthenticationStatus = isPending => {
  return {
    type: actionTypes.AUTHENTICATION_PENDING,
    payload: {
      isPending
    }
  };
};

export const authenticationFail = () => {
  return {
    type: actionTypes.AUTHENTICATION_FAIL
  };
};

export const authenticationSuccess = email => {
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    payload: {
      user: { email }
    }
  };
};

export const beginVerifyToken = token => {
  return {
    type: actionTypes.VERIFYING_TOKEN_FLOW,
    payload: {
      token
    }
  };
};

export const tokenIsVerifying = isVerifing => {
  return {
    type: actionTypes.VERIFYING_TOKEN_PENDING,
    payload: {
      isVerifing
    }
  };
};

export const tokenVerifiedSuccess = userInfo => {
  return {
    type: actionTypes.TOKEN_VALID,
    payload: {
      userInfo
    }
  };
};

export const tokenVerifiedFailure = (err = 'Generic error') => {
  return {
    type: actionTypes.TOKEN_INVALIDATE,
    payload: { err }
  };
};
