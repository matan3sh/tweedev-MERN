import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from 'store/like-post/actions';
import { unLikePost } from 'store/unlike-post/actions';
import moment from 'moment';

import { Avatar, IconButton } from '@material-ui/core';
import {
  ThumbUpAltIcon,
  ThumbDownIcon,
  ChatBubbleOutlineIcon,
} from 'components/icons';
import HomeAddComment from './HomeAddComment';
import { Error, Loader } from 'components/shared';

const HomePostItem = ({
  post,
  likePost,
  loading,
  errors,
  userInfo,
  unLikePost,
  loadingUnLike,
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
    if (isLike === 0) return true;
    else return false;
  };

  return (
    <>
      <HomeAddComment open={addComment} onClose={onCloseAddComment} />
      {errors ||
        (errorsUnLike && <Error errors={errors ? errors : errorsUnLike} />)}
      {loading || loadingUnLike ? (
        <Loader />
      ) : (
        <Link to={`/`}>
          <div className='post'>
            <Avatar src={post.avatar} className='post__avatar' />
            <div className='post__right'>
              <div className='post__header'>
                <h2>{post.name} </h2>
                <span>&#8228;</span>
                <h5>@{post.username} </h5>
                <span>&#8228;</span>
                <h5>{moment(post.createdAt).startOf('hour').fromNow()}</h5>
              </div>
              <p>{post.text}</p>
              <div className='post__footer'>
                {checkPostStatus(post) ? (
                  <>
                    <span>({post.likes.length})</span>
                    <IconButton
                      component='span'
                      onClick={() => onLikePost(post)}
                    >
                      <ThumbUpAltIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <span>({post.likes.length})</span>
                    <IconButton
                      component='span'
                      onClick={() => onUnlikePost(post)}
                    >
                      <ThumbDownIcon />
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
        </Link>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.likePost.loading,
  errors: state.likePost.error,
  userInfo: state.userAuth.userInfo,
  loadingUnLike: state.unlikePost.loading,
  errorsUnLike: state.unlikePost.error,
});
const mapDispatchToProps = {
  likePost,
  unLikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePostItem);
