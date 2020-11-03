import React from 'react';

import { GitHubIcon } from 'components/icons';

const ProfileFooter = ({ repos, githubusername }) => {
  return (
    <div className='profileFooter'>
      <h3>
        <GitHubIcon /> {githubusername} Repos
      </h3>
      <div className='profileFooter__list'>
        {repos?.map((repo) => (
          <div className='profileFooter__card' key={repo.id}>
            <div className='profileFooter__card-left'>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
            </div>
            <div className='profileFooter__card-right'>
              <div className='top'>
                <span>Stars: {repo.stargazers_count}</span>
              </div>
              <div className='middle'>
                <span>Watchers: {repo.watchers_count}</span>
              </div>
              <div className='bottom'>
                <span>Forks: {repo.forks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFooter;
