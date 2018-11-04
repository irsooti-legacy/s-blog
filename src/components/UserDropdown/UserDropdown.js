import React from 'react';

const UserDropdown = props => {
  let isActiveClass = props.visibile ? 'is-active' : null;
  let angleDirectionClass = props.visibile ? 'up' : 'down';

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
        <div class="dropdown-content">
          <a href="noopener" class="dropdown-item">
            Test
          </a>
          <hr className="dropdown-divider" />
          <a onClick={props.onLogout} rel="nofollow noopener" href="#logout" class="dropdown-item">
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
