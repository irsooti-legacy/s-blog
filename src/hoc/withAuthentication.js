import React from 'react';
import { connect } from 'tls';
import { Redirect } from 'react-router-dom';

const WithAuthentication = component => {

  let IsNotAuthenticatedFragment = (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: this.props.location }
      }}
    />
  );

  return (
    <React.Fragment>
      {this.props.isAuthenticated
        ? component
        : IsNotAuthenticatedFragment}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(WithAuthentication);
