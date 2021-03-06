import React from 'react';
import { Link } from 'react-router-dom';

import { LanguageIcon, GitHubIcon } from 'components/icons';

const DevelopersList = ({ developers }) => {
  return (
    <div className='developers'>
      {developers?.map((developer) => (
        <div className='developer__card' key={developer._id}>
          <div className='developer__card-left'>
            <Link to={`/developers/${developer.user._id}`}>
              <img src={developer.user.avatar} alt={developer.user.name} />
            </Link>
          </div>
          <div className='developer__card-right'>
            <Link to={`/developers/${developer.user._id}`}>
              <h3>{developer.user.name}</h3>
              <h5>
                {developer.status} @ {developer.company}
              </h5>
              <small>{developer.location}</small>
            </Link>
            <div>
              {developer.website && (
                <a
                  href={developer.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LanguageIcon /> <span>{developer.website}</span>
                </a>
              )}
              {developer.githubusername && (
                <a
                  href={`https://github.com/${developer.githubusername}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon /> <span>{developer.githubusername}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevelopersList;
