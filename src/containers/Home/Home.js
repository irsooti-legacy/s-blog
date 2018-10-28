import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrievePostsFlow } from '../../store/actions/posts';
import parser from 'html-react-parser';
class Home extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <>
        <section className="hero is-link is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <span className="has-text-weight-bold is-size-1">SuperSimpliest blog</span><br />
                <span className="is-size-4 has-text-white">in the world</span>
              </h1>
            </div>
          </div>
        </section>
        <div className="container posts-distance">
          {this.props.posts.map(post => (
            <div key={post.id}>
              <h3 className="has-text-weight-bold has-text-dark is-size-2">
                {post.title}
              </h3>
              <article>{parser(post.text)}</article>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  let postsToArray = () => {
    let posts = [];
    Object.keys(state.posts.all).map((key, i) => {
      console.warn(state.posts.all[key]);
      Object.keys(state.posts.all[key]).map((subKey, subI) => {
        posts.push({
          id: subKey,
          text: state.posts.all[key][subKey].post.text,
          title: state.posts.all[key][subKey].post.title
        });
      });
    });
    return posts;
  };

  return {
    retrievePostError: state.posts.retrievePostError,
    posts: postsToArray(),
    postsLoadingStatus: state.posts.retrievePostsIsPending
  };
};

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(retrievePostsFlow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
