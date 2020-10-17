import React from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import {
  ThumbUpAltIcon,
  ThumbDownIcon,
  ChatBubbleOutlineIcon,
} from 'components/icons';

const HomePostItem = ({ post }) => {
  return (
    <div className='post'>
      <Avatar src={post.avatar} className='post__avatar' />
      <div className='post__right'>
        <div className='post__header'>
          <h2>{post.fullName} </h2>
          <span>&#8228;</span>
          <h5>@{post.username} </h5>
          <span>&#8228;</span>
          <h5>{post.createdAt}</h5>
        </div>
        <p>{post.text}</p>
        <div className='post__footer'>
          <IconButton component='span'>
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton component='span'>
            <ThumbDownIcon />
          </IconButton>
          <IconButton component='span'>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default HomePostItem;
