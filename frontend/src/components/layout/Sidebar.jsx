import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HomeIcon,
  TwitterIcon,
  SupervisedUserCircleIcon,
  PersonIcon,
  LockIcon,
  PostAddIcon,
} from 'components/icons';
import { Button, IconButton } from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <IconButton component='span' className='sidebar__logo'>
        <TwitterIcon className='sidebar__twitterIcon' />
        <CodeIcon className='sidebar__twitterIcon-code' />
      </IconButton>
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
        <NavLink
          to='/logout'
          activeClassName='sidebar__option-active'
          className='sidebar__option'
        >
          <LockIcon /> <h3>Logout</h3>
        </NavLink>
      </div>
      <Button variant='outlined' className='sidebar__button'>
        <span>Tweet</span>
      </Button>
      <IconButton className='sidebar__button-mobile' component='span'>
        <PostAddIcon />
      </IconButton>
    </div>
  );
};

export default Sidebar;
