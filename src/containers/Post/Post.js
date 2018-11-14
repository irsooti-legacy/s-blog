import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostFlow } from '../../store/actions/posts';
import parser from 'html-react-parser';
import FullpageLoader from '../../components/FullpageLoader/FullpageLoader';

const PostArticle = props => {
  if (!props.text) return '';
  return parser(props.text);
};

PostArticle.propTypes = {
  text: PropTypes.string
};

class Post extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount() {
    const { postId, userId } = this.props.match.params;
    this.props.onLoadPost(userId, postId);
  }

  render() {
    let fragment = (
      <article>
        <section className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.props.post.title}</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div
            className="container"
            style={{ marginTop: 25, minHeight: '80vh' }}
          >
            <div className="columns is-variable is-3">
              <div className="column">
                <PostArticle text={this.props.post.text} />
              </div>
            </div>
          </div>
        </section>
      </article>
    );

    let loading = (
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          padding: '3em',
          paddingTop: '20rem',
          background: '#FFF',
          opacity: 0.5
        }}
      />
    );

    return <div>{this.props.post.text ? fragment : <FullpageLoader />}</div>;
  }
}

const mapStateToProps = state => ({
  post: state.posts.post,
  error: state.posts.retrievePostError,
  isPending: state.posts.retrievePostIsPending
});

const mapDispatchToProps = dispatch => ({
  onLoadPost: (postId, userId) => dispatch(getPostFlow(postId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
