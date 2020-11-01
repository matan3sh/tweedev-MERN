import React from 'react';

import { PageHeader } from 'components/shared';
import { AssignmentIndIcon } from 'components/icons';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import ProfileFooter from './ProfileFooter';

const Profile = () => {
  return (
    <>
      <PageHeader title='Profile' icon={<AssignmentIndIcon />} />
      <div className='profile'>
        <ProfileHeader />
        <ProfileBody />
        <ProfileFooter />
      </div>
    </>
  );
};

export default Profile;
