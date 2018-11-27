import React from 'react';
import PropTypes from 'prop-types';
import HomePost from '../HomePost/HomePost';

const HomePosts = props => {
  return (
    <div className="columns is-multiline">
      {props.posts.map(post => (
        <HomePost
          key={post.postId}
          postId={post.postId}
          authorId={post.authorId}
          title={post.title}
          text={post.text}
          timestamp={post.timestamp}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

HomePosts.propTypes = {
  posts: PropTypes.array
};

export default HomePosts;
