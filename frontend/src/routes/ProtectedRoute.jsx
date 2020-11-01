import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, userInfo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
