import axios from 'axios';
import { FIREBASE_API_KEY } from '../const/api';

export const postAuthentication = (email, password) => {
  return axios
    .post(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
        FIREBASE_API_KEY,
      { email, password, returnSecureToken: true }
    )
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return response.data;
    });
};

export const postVerifyToken = refreshToken => {
  return axios
    .post(
      'https://securetoken.googleapis.com/v1/token?key=' + FIREBASE_API_KEY,
      {
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }
    )
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return response.data;
    });
};

export const signUp = (email, password) => {
  return axios
    .post(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
        FIREBASE_API_KEY,
      { email, password, returnSecureToken: true }
    )
    .then(({ data }) => data)
    .catch(({ response }) => {
      return response.data;
    });
};
