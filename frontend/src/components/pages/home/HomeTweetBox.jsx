import React, { useState } from 'react';

import { Button, Avatar, IconButton } from '@material-ui/core';
import { WallpaperIcon, SentimentVerySatisfiedIcon } from 'components/icons';

const HomeTweetBox = () => {
  const [tweet, setTweet] = useState('');
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            className='tweetBox__input-avatar'
            src='https://media-exp1.licdn.com/dms/image/C4D03AQG5p2qiT7jtGQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=L2pEoN4VTdbblJPwcOHZLq24CRMjvSKVO3g4OGFBYkQ'
          />
          <input
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            type='text'
            placeholder="What's Happening?"
          />
        </div>
        <div className='tweetBox__icons'>
          <div>
            <IconButton component='span'>
              <WallpaperIcon />
            </IconButton>
            <IconButton component='span'>
              <SentimentVerySatisfiedIcon />
            </IconButton>
          </div>
          <Button
            className={`${tweet === '' && 'disabled'}`}
            disabled={tweet === ''}
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeTweetBox;
