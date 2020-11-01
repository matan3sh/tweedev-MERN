import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ component: Component, userInfo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
});

export default connect(mapStateToProps, null)(GuestRoute);
