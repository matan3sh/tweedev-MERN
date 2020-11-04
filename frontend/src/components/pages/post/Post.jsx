import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost, clearPost } from 'store/get-post/actions';
import { likePost, resetLikePost } from 'store/like-post/actions';
import { unLikePost, resetUnLikePost } from 'store/unlike-post/actions';
import moment from 'moment';

import { PageHeader, Loader, Error } from 'components/shared';
import { PostAddIcon } from 'components/icons';
import { IconButton } from '@material-ui/core';
import { ThumbUpAltIcon, ChatBubbleOutlineIcon } from 'components/icons';
import PostComments from './PostComments';

const Post = ({
  match,
  post,
  loading,
  errors,
  getPost,
  clearPost,
  userInfo,
  likePost,
  unLikePost,
  likeSuccess,
  unlikeSuccess,
  resetLikePost,
  resetUnLikePost,
}) => {
  useEffect(() => {
    const { postId } = match.params;
    getPost(postId);
    resetLikePost();
    resetUnLikePost();
    return () => {
      clearPost();
    };
    // eslint-disable-next-line
  }, [getPost, clearPost, likeSuccess, unlikeSuccess]);

  const onLikePost = (post) => {
    if (!userInfo) return;
    else likePost(post);
  };
  const onUnlikePost = (post) => {
    if (!userInfo) return;
    else unLikePost(post);
  };

  const checkPostStatus = (post) => {
    if (!userInfo || !post?.likes) return;
    const isLike = post.likes?.filter(
      (like) => like.user.toString() === userInfo?._id
    ).length;
    if (isLike === 0) return false;
    else return true;
  };

  return (
    <>
      <PageHeader title='Post' icon={<PostAddIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='postDetails'>
          <div className='postDetails__header'>
            <img src={post?.avatar} alt='avatar' />
            <div>
              <h3>{post?.name}</h3>
              <small>{moment(post?.createdAt).startOf('hour').fromNow()}</small>
            </div>
          </div>
          <div className='postDetails__body'>
            <h2>{post?.text}</h2>
          </div>
          <div className='postDetails__footer'>
            {!checkPostStatus(post) ? (
              <div>
                <span>({post?.likes?.length})</span>
                <IconButton component='span' onClick={() => onLikePost(post)}>
                  <ThumbUpAltIcon />
                </IconButton>
              </div>
            ) : (
              <div>
                <span>({post?.likes?.length})</span>
                <IconButton
                  component='span'
                  style={{ color: '#50b7f5' }}
                  onClick={() => onUnlikePost(post)}
                >
                  <ThumbUpAltIcon />
                </IconButton>
              </div>
            )}
            <div>
              <span>({post?.comments?.length})</span>
              <IconButton
                component='span'
                onClick={() => console.log('Add Comment')}
              >
                <ChatBubbleOutlineIcon />
              </IconButton>
            </div>
          </div>
          <PostComments comments={post?.comments} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: state.post.loading,
  errors: state.post.error,
  userInfo: state.userAuth.userInfo,
  likeSuccess: state.likePost.success,
  unlikeSuccess: state.unlikePost.success,
});

const mapDispatchToProps = {
  getPost,
  clearPost,
  likePost,
  unLikePost,
  resetLikePost,
  resetUnLikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
