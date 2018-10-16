import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { authenticateAsync } from '../store/sagas/auth';

class App extends Component {
  componentDidMount() {
    this.props.test()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  test: () => authenticateAsync()
});

export default connect(
  null,
  mapDispatchToProps
)(App);
