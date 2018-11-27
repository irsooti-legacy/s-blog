import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostFlow } from '../../store/actions/posts';
import parser from 'html-react-parser';
import { Skeleton } from 'react-skeleton-placeholder';

const PostArticle = props => {
  if (!props.text) return '';
  return parser(props.text);
};

class Post extends Component {
  componentDidMount() {
    const { userId, postId } = this.props.match.params;
    console.log(this.props);
    this.props.onLoadPost(userId, postId);
  }

  render() {
    let fragment = (
      <article>
        <section className="hero is-medium is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.props.post.text ? (
                  <PostArticle text={this.props.post.title} />
                ) : (
                  <Skeleton paragraph={32} rounded={true} rows={1} />
                )}
              </h1>
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
                {this.props.post.text ? (
                  <PostArticle text={this.props.post.text} />
                ) : (
                  <Skeleton rounded={true} rows={6} />
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    );

    // let loading = (
    //   <div
    //     style={{
    //       position: 'fixed',
    //       width: '100%',
    //       height: '100%',
    //       left: 0,
    //       top: 0,
    //       padding: '3em',
    //       paddingTop: '20rem',
    //       background: '#FFF',
    //       opacity: 0.5
    //     }}
    //   />
    // );

    return <div>{fragment}</div>;
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
