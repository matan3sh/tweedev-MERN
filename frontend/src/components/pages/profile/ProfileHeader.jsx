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
          {userProfile?.social.youtube && (
            <a
              href={userProfile.social.youtube}
              target='_blank'
              rel='noopener noreferrer'
            >
              <YouTubeIcon />
            </a>
          )}
          {userProfile?.social.twitter && (
            <a
              href={userProfile.social.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterIcon />
            </a>
          )}
          {userProfile?.social.facebook && (
            <a
              href={userProfile.social.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon />
            </a>
          )}
          {userProfile?.social.linkedin && (
            <a
              href={userProfile.social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon />
            </a>
          )}
          {userProfile?.social.instagram && (
            <a
              href={userProfile.social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon />
            </a>
          )}
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
