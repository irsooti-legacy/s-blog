import axios from 'axios';
import dotenv from 'dotenv';
dotenv.load({ path: '../../' });

const { API_ENDPOINT } = process.env;

alert(API_ENDPOINT)

//https://irsooti-e526d.firebaseio.com/

export const addNewPost = (token, localId, post) => {
  console.log(post);
  const config = {
    params: { auth: token }
  };

  return axios
    .post(
      `https://sblog-175ab.firebaseio.com/posts/${localId}.json`,
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
