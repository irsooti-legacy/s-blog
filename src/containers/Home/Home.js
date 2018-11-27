import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrievePostsFlow } from '../../store/actions/posts';
import classes from './Home.module.css';
import HomePosts from '../../components/HomePosts/HomePosts';
class Home extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <>
        <section className={'hero is-link is-large ' + classes.homePattern}>
          <div className="hero-body">
            <div className={'container ' + classes.mainTitle}>
              <h1 className="title">
                <span className="has-text-weight-bold is-size-1">
                  Super Simpliest blog
                </span>
              </h1>
              <h6>
                <span className="is-size-4 has-text-white">in the world</span>
              </h6>
            </div>
          </div>
        </section>
        <section className="section">
          <div className={'container ' + classes.postsDistance}>
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
