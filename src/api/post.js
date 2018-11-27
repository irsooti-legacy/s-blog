import axios from 'axios';
import { FIREBASE_API_ENDPOINT } from '../const/api';
import { addPostIdToAllPosts, orderByDatetimeDesc, getProp } from '../utils/data';

export const addNewPost = (token, localId, post) => {
  const config = {
    params: { auth: token }
  };

  return axios
    .post(
      `${FIREBASE_API_ENDPOINT}/posts/${localId}.json`,
      {
        ...post,
        timestamp: new Date()
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
    .then(getProp('data'))
    .then(addPostIdToAllPosts)
    .then(orderByDatetimeDesc)
    .catch(err => err);
};

export const getPostByUidAndPid = (userId, postId) => {
  return axios
    .get(`${FIREBASE_API_ENDPOINT}/posts/${userId}/${postId}.json`)
    .then(({ data }) => data)
    .catch(err => err);
};
