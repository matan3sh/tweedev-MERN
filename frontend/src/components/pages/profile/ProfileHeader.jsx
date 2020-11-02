import React from 'react';

import {
  YouTubeIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  AssignmentTurnedInIcon,
} from 'components/icons';

const ProfileHeader = ({ userProfile }) => {
  return (
    <div className='profileHeader'>
      <div className='profileHeader__left'>
        <img src={userProfile?.user?.avatar} alt='avatar' />
        <h3>{userProfile?.user?.name}</h3>
        <h5>
          {userProfile?.status} @ {userProfile?.company}
        </h5>
        <h6>{userProfile?.location}</h6>
        <div className='profileHeader__left-icons'>
          {userProfile?.social.youtube && <YouTubeIcon />}
          {userProfile?.social.twitter && <TwitterIcon />}
          {userProfile?.social.facebook && <FacebookIcon />}
          {userProfile?.social.linkedin && <LinkedInIcon />}
          {userProfile?.social.instagram && <InstagramIcon />}
        </div>
      </div>
      <div className='profileHeader__right'>
        <h5>Bio</h5>
        <p>{userProfile?.bio}</p>
        <div className='profileHeader__right-skills'>
          {userProfile?.skills?.map((skill, index) => (
            <span key={index}>
              <AssignmentTurnedInIcon /> {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
