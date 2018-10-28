import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import './NewPost.css';
import { addPostFlow } from '../../store/actions/posts';
import { toast } from 'react-toastify';

class NewPost extends Component {
  state = {
    text: '',
    title: ''
  };

  componentDidUpdate() {
    if (this.props.isLoading && this.props.errorMsg === '') {
      toast.success('Post published! 🎉', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  handleChangeArticle = value => {
    this.setState({ text: value });
  };

  handleChangeTitle = ({ target }) => {
    this.setState({ title: target.value });
  };

  showIsPostingLoader = () => {
    if (this.props.isLoading) return 'is-loading';
    return '';
  };

  addPostHandler = () => {
    const { title, text } = this.state;
    this.props.addPostFlow(title, text);
  };

  render() {
    return (
      <div className="new-post">
        <section className="hero is-light is-is-medium">
          <div className="hero-body">
            <div className="container">
              <h6>Your title will sucks anyway</h6>
              <h1 className="title is-size-2">
                <input
                  placeholder="Title"
                  className="input-title"
                  type="text"
                  onChange={this.handleChangeTitle}
                  value={this.state.title}
                />
              </h1>
            </div>
          </div>
        </section>
        <div style={{ marginTop: '1em' }} className="columns is-mobile">
          <div className="column is-7 is-offset-1">
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChangeArticle}
            />
          </div>
          <div style={{ marginTop: '1em' }} className="column is-3">
            <button
              onClick={this.addPostHandler}
              className={
                'button is-primary is-large is-fullwidth ' +
                this.showIsPostingLoader()
              }
            >
              Post it!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.posts.addingPostIsPending,
  errorMsg: state.posts.retrievePostError
});

const mapDispatchToProps = dispatch => ({
  addPostFlow: (title, text) => dispatch(addPostFlow({ title, text }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
