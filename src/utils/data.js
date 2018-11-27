import { curry } from 'ramda';

export const updateState = (oldState, newState) => {
  return {
    ...oldState,
    ...newState
  };
};

export const getProp = curry((propName, obj) => obj[propName]);

export const addPostIdToAllPosts = curry(obj => {
  let posts = [];
  Object.keys(obj).map(authorKey =>
    Object.keys(obj[authorKey]).map(postKey => {
      return posts.push({
        ...obj[authorKey][postKey],
        authorId: authorKey,
        postId: postKey
      });
    })
  );
  return posts;
});

export const orderByDatetimeDesc = curry(obj =>
  obj
    .sort((prev, next) => new Date(prev.timestamp) - new Date(next.timestamp))
    .reverse()
);
