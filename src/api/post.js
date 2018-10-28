import axios from 'axios';

//https://irsooti-e526d.firebaseio.com/

export const addNewPost = (token, localId, post) => {
  const config = {
    params: { auth: token }
  };

  return axios
    .post(
      `https://irsooti-e526d.firebaseio.com/posts/${localId}.json`,
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
