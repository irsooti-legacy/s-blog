import axios from 'axios';

export const postAuthentication = (email, password) => {
  return axios
    .post('https://us-central1-sblog-175ab.cloudfunctions.net/signInAction', {
      email,
      pass: password,
      returnSecureToken: true
    })
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
      'https://us-central1-sblog-175ab.cloudfunctions.net/verifyTokenAction',
      {
        refresh_token: refreshToken
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
    .post('https://us-central1-sblog-175ab.cloudfunctions.net/signupAction', {
      email,
      password,
      returnSecureToken: true
    })
    .then(({ data }) => data)
    .catch(({ response }) => {
      return response.data;
    });
};
