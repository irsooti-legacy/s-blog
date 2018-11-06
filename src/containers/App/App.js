import React, { Component } from 'react';
import style from './App.css';
import { connect } from 'react-redux';
import { beginVerifyToken, redirectAfterLogin } from '../../store/actions/auth';
import Toolbar from '../Toolbar/Toolbar';
import Login from '../Login/Login';
import { Router, Route, Switch } from 'react-router-dom';
import withAuthentication from '../../hoc/withAuthentication';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import NewPost from '../NewPost/NewPost';
import { toast, ToastContainer } from 'react-toastify';
import NotFound from '../../components/NotFound/NotFound';
import Post from '../Post/Post';
import history from '../../utils/history';

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    let refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      this.props.preAuthenticate(refreshToken);
    }
    this.props.setRedirectUrl(window.location.pathname);
  }

  componentDidUpdate() {
    if (this.props.user !== null && this.props.user === {}) {
      toast.success('You are in bro! 💪', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className={style.test}>
          <Toolbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/" component={Login} />
            <Route path="/signup/" component={Signup} />
            <Route path="/newpost/" component={withAuthentication(NewPost)} />
            <Route path="/:userId/:postId" component={Post} />
            <Route component={NotFound} />
          </Switch>
          <ToastContainer />
          <footer className="footer" style={{ marginTop: 10 }}>
            <div className="content has-text-centered">
              <p>
                <strong>SBLOG</strong> with 💗
              </p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  preAuthenticate: refreshToken => dispatch(beginVerifyToken(refreshToken)),
  setRedirectUrl: path => dispatch(redirectAfterLogin(path))
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
