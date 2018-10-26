import React, { Component } from 'react';
import style from './App.css';
import { connect } from 'react-redux';
import { beginAuthentication } from '../../store/actions/auth';
import Toolbar from '../Toolbar/Toolbar';
import Login from '../Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAuthentication from '../../hoc/withAuthentication';

class App extends Component {
  componentDidMount() {
    console.log(style);

  }

  render() {
    return (
      <Router>
        <div className={style.test}>
          <Toolbar />
          <Route path="/" exact component={withAuthentication(Login)} />
          <Route path="/login" exact component={Login} />
          
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  test: x => dispatch(beginAuthentication(x.email, x.password))
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
