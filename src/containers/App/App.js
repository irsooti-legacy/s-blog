import React, { Component } from 'react';
import style from './App.css';
import { connect } from 'react-redux';
import { beginVerifyToken, redirectAfterLogin } from '../../store/actions/auth';
import Toolbar from '../Toolbar/Toolbar';
import { Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import history from '../../utils/history';
import AppRouter from '../AppRouter/AppRouter';

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
          <AppRouter />
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
