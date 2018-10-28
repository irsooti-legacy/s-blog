import axios from 'axios';
import { FIREBASE_API_ENDPOINT } from '../const/api';

export const addNewPost = (token, localId, post) => {
  const config = {
    params: { auth: token }
  };

  return axios
    .post(
      `${FIREBASE_API_ENDPOINT}/posts/${localId}.json`,
      {
        post
      },
      config
    )
    .then(({ data }) => {
      return data.name;
    })
    .catch(err => {
      console.warn('Error at post ', err);
      return err;
    });
};

export const getAllPosts = () => {
  return axios
    .get(`${FIREBASE_API_ENDPOINT}/posts.json`)
    .then(({ data }) => data)
    .catch(err => err);
};
