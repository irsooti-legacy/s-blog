import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDropdown = props => {
  let isActiveClass = props.visibile ? 'is-active' : null;
  let angleDirectionClass = props.visibile ? 'up' : 'down';

  const onClick = () => {
    props.onLogout();
    props.onClick();
  };

  return (
    <div className={'buttons dropdown ' + isActiveClass}>
      <button onClick={props.onClick} className="button is-primary">
        <span className="icon">
          <i className="fas fa-user" />
        </span>
        <span>{props.username}</span>
        <span className="icon is-small">
          <i
            className={'fas fa-angle-' + angleDirectionClass}
            aria-hidden="true"
          />
        </span>
      </button>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <NavLink
            className="dropdown-item"
            to="/profile"
            onClick={props.onClick}
            activeClassName="active"
          >
            Profile
          </NavLink>
          <hr className="dropdown-divider" />
          <a
            onClick={onClick}
            rel="nofollow noopener"
            href="#logout"
            className="dropdown-item"
          >
            <span className="icon">
              <i className="fas fa-lock" aria-hidden="true" />
            </span>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
