import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'store/user-auth/actions';

import {
  HomeIcon,
  SupervisedUserCircleIcon,
  PersonIcon,
  LockIcon,
  ArtTrackIcon,
  LockOpenIcon,
  DashboardIcon,
} from 'components/icons';
const BottomNav = ({ userInfo, logout }) => {
  const userLinks = (
    <>
      <NavLink
        exact
        to='/'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <HomeIcon /> <h3>Home</h3>
      </NavLink>
      <NavLink
        to='/profile'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <PersonIcon /> <h3>Profile</h3>
      </NavLink>
      <NavLink
        to='/users'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <SupervisedUserCircleIcon /> <h3>Users</h3>
      </NavLink>
      <NavLink
        to='/dashboard'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <DashboardIcon /> <h3>Dashboard</h3>
      </NavLink>
      <span className='navBottom__link' onClick={() => logout()}>
        <LockIcon /> <h3>Logout</h3>
      </span>
    </>
  );
  const guestLinks = (
    <>
      <NavLink
        exact
        to='/'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <HomeIcon /> <h3>Home</h3>
      </NavLink>
      <NavLink
        to='/users'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <SupervisedUserCircleIcon /> <h3>Users</h3>
      </NavLink>
      <NavLink
        to='/login'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <LockOpenIcon /> <h3>Login</h3>
      </NavLink>
      <NavLink
        to='/register'
        activeClassName='navBottom__active'
        className='navBottom__link'
      >
        <ArtTrackIcon /> <h3>Register</h3>
      </NavLink>
    </>
  );
  return <nav className='navBottom'>{!userInfo ? guestLinks : userLinks}</nav>;
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);
