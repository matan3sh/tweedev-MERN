import React from 'react';

import { GitHubIcon } from 'components/icons';

const ProfileFooter = () => {
  return (
    <div className='profileFooter'>
      <h3>
        <GitHubIcon /> Github Repos
      </h3>
      <div className='profileFooter__card'>
        <div className='profileFooter__card-left'>
          <h4>Repo One</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            laborum!
          </p>
        </div>
        <div className='profileFooter__card-right'>
          <div className='red'>
            <span>Stars: 44</span>
          </div>
          <div className='green'>
            <span>Watchers: 21</span>
          </div>
          <div className='orange'>
            <span>Forks: 25</span>
          </div>
        </div>
      </div>
      <div className='profileFooter__card'>
        <div className='profileFooter__card-left'>
          <h4>Repo One</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            laborum!
          </p>
        </div>
        <div className='profileFooter__card-right'>
          <div className='red'>
            <span>Stars: 44</span>
          </div>
          <div className='green'>
            <span>Watchers: 21</span>
          </div>
          <div className='orange'>
            <span>Forks: 25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFooter;
