import React from 'react';

import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import moment from 'moment';
import history from '../../utils/history';
import './HomePost.css'

const goToPost = (authorId, postId) => evt => {
  console.log(authorId, postId)
  history.push(`/${authorId}/${postId}`);
};

const HomePost = props => {
  return (
    <div style={{ padding: 25 }} className="column is-full">
      <div className="HomePost card" onClick={goToPost(props.authorId, props.postId)}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48 ">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">@anon</p>
            </div>
          </div>

          <div className="content">
            {parser(props.text)}
            <br />
            <time dateTime="2016-1-1">{moment(props.timestamp).fromNow()}</time>
          </div>
        </div>
      </div>
    </div>
  );
};

HomePost.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default HomePost;
