import React from 'react';

import {
  YouTubeIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  AssignmentTurnedInIcon,
} from 'components/icons';

const ProfileHeader = () => {
  return (
    <div className='profileHeader'>
      <div className='profileHeader__left'>
        <img
          src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
          alt='avatar'
        />
        <h3>Matan Shaviro</h3>
        <h5>Full Stack Developer</h5>
        <h6>Tel-Aviv, ISR</h6>
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
          neque modi perspiciatis similique?
        </p>
        <div className='profileHeader__right-skills'>
          <span>
            <AssignmentTurnedInIcon /> React
          </span>
          <span>
            <AssignmentTurnedInIcon />
            Vue
          </span>
          <span>
            <AssignmentTurnedInIcon />
            Node
          </span>
          <span>
            <AssignmentTurnedInIcon />
            Mongo
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
