import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from 'store/like-post/actions';
import { unLikePost } from 'store/unlike-post/actions';
import moment from 'moment';

import { Avatar, IconButton } from '@material-ui/core';
import { ThumbUpAltIcon, ChatBubbleOutlineIcon } from 'components/icons';
import HomeAddComment from './HomeAddComment';
import { Error } from 'components/shared';

const HomePostItem = ({
  post,
  likePost,
  errors,
  userInfo,
  unLikePost,
  errorsUnLike,
}) => {
  const [addComment, setAddComment] = useState(false);

  const onOpenAddComment = () => setAddComment(true);
  const onCloseAddComment = () => setAddComment(false);

  const onAddComment = () => {
    if (!userInfo) return;
    else onOpenAddComment();
  };

  const onLikePost = (post) => {
    if (!userInfo) return;
    else likePost(post);
  };
  const onUnlikePost = (post) => {
    if (!userInfo) return;
    else unLikePost(post);
  };

  const checkPostStatus = (post) => {
    if (!userInfo) return;
    const isLike = post.likes?.filter(
      (like) => like.user.toString() === userInfo?._id
    ).length;
    if (isLike === 0) return false;
    else return true;
  };

  return (
    <>
      <HomeAddComment open={addComment} onClose={onCloseAddComment} />
      {errors ||
        (errorsUnLike && <Error errors={errors ? errors : errorsUnLike} />)}
      <div className='post'>
        <Avatar src={post.avatar} className='post__avatar' />
        <div className='post__right'>
          <Link to={`/posts/${post._id}`}>
            <div className='post__header'>
              <h2>{post.name} </h2>
              <span>&#8228;</span>
              <h5>@{post.username} </h5>
              <span>&#8228;</span>
              <h5>{moment(post.createdAt).startOf('hour').fromNow()}</h5>
            </div>
            <p>{post.text}</p>
          </Link>
          <div className='post__footer'>
            {!checkPostStatus(post) ? (
              <>
                <span>({post.likes.length})</span>
                <IconButton component='span' onClick={() => onLikePost(post)}>
                  <ThumbUpAltIcon />
                </IconButton>
              </>
            ) : (
              <>
                <span>({post.likes.length})</span>
                <IconButton
                  component='span'
                  style={{ color: '#50b7f5' }}
                  onClick={() => onUnlikePost(post)}
                >
                  <ThumbUpAltIcon />
                </IconButton>
              </>
            )}
            <span>({post.comments.length})</span>
            <IconButton component='span' onClick={onAddComment}>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.likePost.error,
  userInfo: state.userAuth.userInfo,
  errorsUnLike: state.unlikePost.error,
});
const mapDispatchToProps = {
  likePost,
  unLikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePostItem);
