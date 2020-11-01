import React from 'react';

import ProfileEdu from './ProfileEdu';
import ProfileExp from './ProfileExp';

const ProfileBody = ({ experience, education }) => {
  return (
    <div className='profileBody'>
      {!experience.length ? (
        <p>No Experience Entered</p>
      ) : (
        <ProfileExp experience={experience} />
      )}
      {!education.length ? (
        <p>No Education Entered</p>
      ) : (
        <ProfileEdu education={education} />
      )}
    </div>
  );
};

export default ProfileBody;
