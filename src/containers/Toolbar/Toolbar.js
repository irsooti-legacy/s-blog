import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Toolbar extends Component {
  state = {
    showMobileNavbar: false
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

  componentDidUpdate() {
    console.log(this.props.match)
  }

  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
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
                <div className="buttons">
                  <button className="button is-primary">
                    <span className="icon">
                      <i className="fas fa-user" />
                    </span>
                    <span>{this.props.user.email}</span>
                  </button>
                </div>
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

export default withRouter(connect(mapStateToProps)(Toolbar));
