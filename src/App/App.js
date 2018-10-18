import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { beginAuthentication } from '../store/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.test({ email: 'irsooti@gmail.com', password: '' });
  }

  render() {
    return (
      <div
        onClick={() =>
          this.props.test({ email: 'irsooti@gmail.com', password: '' })
        }
      >
        {this.props.user.email}
      </div>
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
