import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginAuthentication } from '../../store/actions/auth';
import { validateEmail } from '../../utils/common';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';


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

  onFormValidation = evt => {
    evt.preventDefault();
    console.log(evt);
    this.onAuthenticate();
  };

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error && this.props.error !== null) {
      toast.error('😢 ' + this.props.error, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  render() {
    let isAuthenticatingClasses = this.props.isPending ? 'is-loading' : '';
    let notAuthenticatedFragment = (
      <React.Fragment>
        <section className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Login</h1>
              <h2 className="subtitle">
                Authenticate and <strong>start your stories</strong>
              </h2>
            </div>
          </div>
        </section>
        <form onSubmit={this.onFormValidation}>
          <div className="container" style={{ padding: 15 }}>
            <div style={{ marginTop: '1em' }} className="columns is-desktop is-5">
              <div className="column is-3 is-offset-4">
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
                      type="submit"
                      className={`button is-success ${isAuthenticatingClasses}`}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
    let authenticatedFragment = (
      <Redirect
        to={{
          pathname: this.props.redirectUrl
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
  redirectUrl: state.auth.redirectUrl,
  isAuthenticated: state.auth.isAuthenticated,
  isPending: state.auth.isPending,
  error: state.auth.signinError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
