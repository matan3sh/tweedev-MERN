import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearUserRegister } from 'store/user-register/actions';
import { clearUserLogin } from 'store/user-login/actions';

import {
  HomeIcon,
  TwitterIcon,
  SupervisedUserCircleIcon,
  PersonIcon,
  LockIcon,
  PostAddIcon,
  ArtTrackIcon,
  LockOpenIcon,
} from 'components/icons';
import { Button, IconButton } from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';

const Sidebar = ({
  userFromRegister,
  userFromLogin,
  clearUserRegister,
  clearUserLogin,
}) => {
  const userLinks = (
    <>
      <div className='sidebar__options'>
        <NavLink
          exact
          to='/'
          activeClassName='sidebar__option-active'
          className='sidebar__option'
        >
          <HomeIcon /> <h3>Home</h3>
        </NavLink>
        <NavLink
          to='/profile'
          activeClassName='sidebar__option-active'
          className='sidebar__option'
        >
          <PersonIcon /> <h3>Profile</h3>
        </NavLink>
        <NavLink
          to='/users'
          activeClassName='sidebar__option-active'
          className='sidebar__option'
        >
          <SupervisedUserCircleIcon /> <h3>Users</h3>
        </NavLink>
        <span
          className='sidebar__option'
          onClick={() => {
            clearUserRegister();
            clearUserLogin();
          }}
        >
          <LockIcon /> <h3>Logout</h3>
        </span>
      </div>
      <Button variant='outlined' className='sidebar__button'>
        <span>Tweet</span>
      </Button>
      <IconButton className='sidebar__button-mobile' component='span'>
        <PostAddIcon />
      </IconButton>
    </>
  );
  const guestLinks = (
    <div className='sidebar__options'>
      <NavLink
        exact
        to='/'
        activeClassName='sidebar__option-active'
        className='sidebar__option'
      >
        <HomeIcon /> <h3>Home</h3>
      </NavLink>
      <NavLink
        to='/login'
        activeClassName='sidebar__option-active'
        className='sidebar__option'
      >
        <LockOpenIcon /> <h3>Login</h3>
      </NavLink>
      <NavLink
        to='/register'
        activeClassName='sidebar__option-active'
        className='sidebar__option'
      >
        <ArtTrackIcon /> <h3>Register</h3>
      </NavLink>
    </div>
  );
  return (
    <div className='sidebar'>
      <IconButton component='span' className='sidebar__logo'>
        <TwitterIcon className='sidebar__twitterIcon' />
        <CodeIcon className='sidebar__twitterIcon-code' />
      </IconButton>
      {userFromRegister === null && userFromLogin === null
        ? guestLinks
        : userLinks}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userFromRegister: state.userRegister.userInfo,
  userFromLogin: state.userLogin.userInfo,
});

const mapDispatchToProps = {
  clearUserLogin,
  clearUserRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
