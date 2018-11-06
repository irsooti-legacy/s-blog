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

    if (title && text) {
      this.props.addPostFlow(title, text);
    } else {
      toast.error(
        `Fill the following fields:
       ${title ? '' : 'title'} ${text ? '' : 'text'}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT
        }
      );
    }
  };

  submitPostRef = React.createRef();
  postSectionRef = React.createRef();

  rectWatcher = evt => {
    console.log(
      this.submitPostRef.current.offsetTop - window.pageYOffset <=
        this.submitPostRef.current.offsetTop
    );
    console.log(this.submitPostRef.current.offsetTop);
    if (window.pageYOffset <= this.submitPostRef.current.offsetBottom) {
      console.log(window.pageYOffset);
    }

    //.getBoundingClientRect();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.rectWatcher);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.rectWatcher);
  }

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
        {/* <div style={{ marginTop: '1em' }} className="columns is-mobile"> */}
        <section className="" ref={this.postSectionRef}>
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChangeArticle}
          />

          <div
            ref={this.submitPostRef}
            style={{
              marginTop: '1em',
              textAlign: 'right',
              position: 'fixed',
              right: 0,
              bottom: '2em'
            }}
            className="column is-3"
          >
            <button
              onClick={this.addPostHandler}
              className={
                'button is-primary is-large is-fullwidth ' +
                this.showIsPostingLoader()
              }
            >
              Post it!
            </button>
            {/* </div> */}
          </div>
        </section>
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
