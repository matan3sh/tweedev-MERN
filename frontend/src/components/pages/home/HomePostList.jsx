import React from 'react';
import HomePostItem from './HomePostItem';

import { posts } from 'data/posts';

const HomePostList = () => {
  return (
    <div className='posts'>
      {posts.map((post, index) => (
        <HomePostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default HomePostList;
