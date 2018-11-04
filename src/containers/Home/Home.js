import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrievePostsFlow } from '../../store/actions/posts';
import HomePosts from '../../components/HomePosts/HomePosts';
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
                <span className="has-text-weight-bold is-size-1">
                  SuperSimpliest blog
                </span>
                <br />
                <span className="is-size-4 has-text-white">in the world</span>
              </h1>
            </div>
          </div>
        </section>
        <section
          style={{ marginTop: '1em' }}
          className="homepost-articles"
        >
          <div className="container posts-distance">
            <HomePosts posts={this.props.posts} />
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  let postsToArray = () => {
    let posts = [];
    Object.keys(state.posts.all).map((key, i) => {
      Object.keys(state.posts.all[key]).map((subKey, subI) => {
        console.log(state.posts.all[key][subKey])
        posts.push({
          id: subKey,
          text: state.posts.all[key][subKey].text,
          title: state.posts.all[key][subKey].title,
          timestamp: state.posts.all[key][subKey].timestamp,
        });
        return true;
      });
      return true;
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
