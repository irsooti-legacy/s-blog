import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginAuthentication } from '../../store/actions/auth';
import { validateEmail } from '../../utils/common';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    user: '',
    pass: '',
    userIsValid: false
  };

  handleCredential = propName => evt => {
    let _state = { ...this.state };
    _state[propName] = evt.target.value;

    console.log(this.onEmailValidation(_state.user));
    this.setState({ user: _state.user, pass: _state.pass });
  };

  onAuthenticate = () => {
    const { user, pass } = this.state;
    console.log(user, pass);
    if (validateEmail(this.state.user)) this.props.authenticate(user, pass);
  };

  onEmailValidation = email => {
    if (validateEmail(email)) {
      this.setState({ userIsValid: true });
      return true;
    } else {
      this.setState({ userIsValid: false });
      return false;
    }
  };

  render() {
    let isAuthenticatingClasses = this.props.isPending ? 'is-loading' : '';
    let notAuthenticatedFragment = (
      <React.Fragment>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Login</h1>
              <h2 class="subtitle">
                Authenticate and <strong>start your stories</strong>
              </h2>
            </div>
          </div>
        </section>
        <div style={{ marginTop: '1em' }} class="columns is-mobile">
          <div class="column is-4 is-offset-4">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.user}
                  onChange={this.handleCredential('user')}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i
                    className={`fas ${
                      this.state.userIsValid ? 'fa-check' : 'fa-times'
                    }`}
                  />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  value={this.state.pass}
                  placeholder="Password"
                  onChange={this.handleCredential('pass')}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  onClick={this.onAuthenticate}
                  className={`button is-success ${isAuthenticatingClasses}`}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    let authenticatedFragment = (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );

    return !this.props.isAuthenticated
      ? notAuthenticatedFragment
      : authenticatedFragment;
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: (user, pass) => dispatch(beginAuthentication(user, pass))
});

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isPending: state.auth.isPending
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
