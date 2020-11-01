import React from 'react';

import ProfileEdu from './ProfileEdu';
import ProfileExp from './ProfileExp';

const ProfileBody = () => {
  return (
    <div className='profileBody'>
      <ProfileExp />
      <ProfileEdu />
    </div>
  );
};

export default ProfileBody;
