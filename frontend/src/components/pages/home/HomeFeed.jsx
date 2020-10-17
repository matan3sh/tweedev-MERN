import React from 'react';

import { AssistantIcon } from 'components/icons';
import { PageHeader } from 'components/shared';
import HomeTweetBox from './HomeTweetBox';
import HomePostList from './HomePostList';

const HomeFeed = () => {
  return (
    <>
      <PageHeader title='Home' icon={<AssistantIcon />} />
      <div className='homeFeed'>
        <HomeTweetBox />
        <HomePostList />
      </div>
    </>
  );
};

export default HomeFeed;
