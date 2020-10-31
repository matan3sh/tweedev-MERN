import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({
  component: Component,
  userFromRegister,
  userFromLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userFromRegister === null || userFromLogin === null ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userFromRegister: state.userRegister.userInfo,
  userFromLogin: state.userLogin.userInfo,
});

export default connect(mapStateToProps, null)(GuestRoute);
