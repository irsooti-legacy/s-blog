import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDropdown from '../../components/UserDropdown/UserDropdown';
import { logoutFlow } from '../../store/actions/auth';

class Toolbar extends Component {
  state = {
    showMobileNavbar: false,
    dropdownUserIsVisible: false
  };

  dropDownUserHandler = evt => {
    this.setState(prevState => ({
      dropdownUserIsVisible: !prevState.dropdownUserIsVisible
    }));
  };

  onBurgerButtonClick = evt => {
    this.setState(prevState => ({
      showMobileNavbar: !prevState.showMobileNavbar
    }));
  };

  isBurgerBarFocused = () => {
    if (this.state.showMobileNavbar) {
      return 'is-active';
    } else {
      return '';
    }
  };

  componentDidUpdate() {}

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://github.com/irsooti/s-blog/tree/dev"
          >
            <span className="is-bold">SBLOG</span>
          </a>

          <div
            className={`navbar-burger burger ${this.isBurgerBarFocused()}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.onBurgerButtonClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div
          id="basicblogNavbar"
          className={`navbar-menu ${this.isBurgerBarFocused()}`}
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              exact
              to="/"
            >
              Home
            </NavLink>
            {this.props.user.email !== undefined ? (
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/newpost"
              >
                New post
              </NavLink>
            ) : null}
          </div>

          {this.props.user.email === undefined ? (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/signup" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="navbar-item">
                <UserDropdown
                  visibile={this.state.dropdownUserIsVisible}
                  username={this.props.user.email}
                  onLogout={this.props.onLogout}
                  onClick={this.dropDownUserHandler}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logoutFlow())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Toolbar)
);
