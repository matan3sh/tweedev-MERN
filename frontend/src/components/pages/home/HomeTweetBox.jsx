import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from 'store/add-post/actions';

import { Button, Avatar, IconButton } from '@material-ui/core';
import { WallpaperIcon, SentimentVerySatisfiedIcon } from 'components/icons';

const HomeTweetBox = ({ userInfo, addPost }) => {
  const [tweet, setTweet] = useState('');

  const onAddPost = () => {
    addPost({ text: tweet });
    setTweet('');
  };

  return (
    <div className='tweetBox'>
      {userInfo === null ? (
        <form>
          <div className='tweetBox__input'>
            <Avatar
              className='tweetBox__input-avatar'
              src='http://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?size=200&rating=pg&default=mm'
            />
            <input
              value={tweet}
              type='text'
              onChange={(e) => console.log(e.target.value)}
              placeholder='Must Login to Tweet'
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
              className={`${userInfo === null && 'disabled'}`}
              disabled={userInfo === null}
            >
              Tweet
            </Button>
          </div>
        </form>
      ) : (
        <form>
          <div className='tweetBox__input'>
            <Avatar
              className='tweetBox__input-avatar'
              src={`${userInfo?.avatar}`}
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
              onClick={() => onAddPost()}
            >
              Tweet
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTweetBox);
