import React from 'react';

import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import moment from 'moment';
import history from '../../utils/history';
import classes from './HomePost.module.css';
import Tag from '../Tag/Tag';

const goToPost = (authorId, postId) => evt => {
  console.log(authorId, postId);
  history.push(`/${authorId}/${postId}`);
};

const HomePost = ({ timestamp, authorId, postId, title, text, tags = [] }) => {
  return (
    <div style={{ padding: 25 }} className="column is-full">
      <div
        className={'card ' + classes.HomePost}
        onClick={goToPost(authorId, postId)}
      >
        <div className="card-content">
          <div className="media">
            {/* <div className="media-left">
              <figure className="image is-48x48 ">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div> */}
            <div>
              <h3 className="title is-3">{title}</h3>
              <p className="subtitle is-6">
                <time dateTime={moment(timestamp).format()}>
                  <span aria-label="calendar" role="img">
                    📅
                  </span>{' '}
                  {`${moment(timestamp).format('D/MM/Y')}`}
                </time>
              </p>
            </div>
          </div>

          <div className="content">{parser(text)}</div>

          <div className="tags">
            {tags.map((tag, i) => (
              <Tag prefix="#" key={i} type="light" size="medium" text={tag} />
            ))}
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
