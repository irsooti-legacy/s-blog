import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Toolbar extends Component {
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

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <span>Exp</span>
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${this.isBurgerBarFocused()}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.onBurgerButtonClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="basicblogNavbar"
          className={`navbar-menu ${this.isBurgerBarFocused()}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div class="navbar-dropdown">
                <Link className="navbar-item" to="/login">
                  Home
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="#" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
