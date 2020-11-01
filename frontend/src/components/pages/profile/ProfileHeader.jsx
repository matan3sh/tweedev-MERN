import React from 'react';

import {
  YouTubeIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  AssignmentTurnedInIcon,
} from 'components/icons';

const ProfileHeader = ({ avatar, name, status, location, bio, skills }) => {
  return (
    <div className='profileHeader'>
      <div className='profileHeader__left'>
        <img src={avatar} alt='avatar' />
        <h3>{name}</h3>
        <h5>{status}</h5>
        <h6>{location}</h6>
        <div className='profileHeader__left-icons'>
          <YouTubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className='profileHeader__right'>
        <h5>Bio</h5>
        <p>{bio}</p>
        <div className='profileHeader__right-skills'>
          {skills?.map((skill, index) => (
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
