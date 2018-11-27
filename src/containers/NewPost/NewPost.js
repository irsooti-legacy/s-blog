import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import './NewPost.css';
import { addPostFlow } from '../../store/actions/posts';
import { toast } from 'react-toastify';
import history from '../../utils/history';
import Tag from '../../components/Tag/Tag';

class NewPost extends Component {
  state = {
    text: '',
    title: '',
    tags: [],
    tempTags: ''
  };

  componentDidUpdate() {
    if (
      this.props.isLoading &&
      this.props.errorMsg === '' &&
      this.props.postRedirect
    ) {
      toast.success('Post published! 🎉', {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      history.push(
        `/${localStorage.getItem('localId')}/${this.props.postRedirect}`
      );
    }
  }

  handleChangeArticle = value => {
    this.setState({ text: value });
  };

  handleChangeTitle = ({ target }) => {
    this.setState({ title: target.value });
  };

  handleChangeTags = ({ target }) => {
    let currentTag = target.value;
    if (
      currentTag[currentTag.length - 1] === ',' ||
      (currentTag[currentTag.length - 1] === ';' && currentTag.length > 2)
    ) {
      this.setState(prevState => {
        return {
          tags: prevState.tags.concat(
            currentTag.slice(0, currentTag.length - 1)
          ),
          tempTags: ''
        };
      });
    } else {
      this.setState({ tempTags: currentTag });
    }
  };

  onRemoveTag = index => () => {
    this.setState(prevState => {
      prevState.tags.splice(index, 1);
      return {
        tags: prevState.tags
      };
    });
  };

  showIsPostingLoader = () => {
    if (this.props.isLoading) return 'is-loading';
    return '';
  };

  addPostHandler = () => {
    const { title, text, tags } = this.state;

    if (title && text) {
      this.props.addPostFlow(title, text, tags);
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

  render() {
    return (
      <div className="new-post">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h6>Your awesome title</h6>
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
        <section className="hero is-light is-small">
          <div className="hero-body">
            <div className="container">
              <div class="tags are-large">
                {this.state.tags.map((tag, index) => (
                  <Tag
                    onRemove={this.onRemoveTag(index)}
                    prefix="#"
                    type="dark"
                    key={index}
                    text={tag}
                  />
                ))}
              </div>
              <div>
                <input
                  placeholder="#tags"
                  className="input-title"
                  type="text"
                  onChange={this.handleChangeTags}
                  value={this.state.tempTags}
                />
              </div>
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
              position: 'sticky',
              right: 0,
              bottom: '2em'
            }}
            className="column is-12"
          >
            <button
              onClick={this.addPostHandler}
              className={
                'button is-primary is-large ' + this.showIsPostingLoader()
              }
            >
              Post it!
            </button>
          </div>
          {/* </div> */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.posts.addingPostIsPending,
  errorMsg: state.posts.retrievePostError,
  postRedirect: state.posts.postIdRetrieved
});

const mapDispatchToProps = dispatch => ({
  addPostFlow: (title, text, tags) =>
    dispatch(addPostFlow({ title, text, tags }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
