import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrievePostsFlow } from '../../store/actions/posts';
import classes from './Home.css'
import HomePosts from '../../components/HomePosts/HomePosts';
class Home extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <>
        <section className="hero is-link is-large home-pattern">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <span className="has-text-weight-bold is-size-1">
                  SuperSimpliest blog
                </span>
                <br />
                <span className="is-size-4 has-text-white">in the world</span>
              </h1>
            </div>
          </div>
        </section>
        <section  className="section">
          <div className="container posts-distance">
            <HomePosts posts={this.props.posts} />
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    retrievePostError: state.posts.retrievePostError,
    posts: state.posts.all,
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
