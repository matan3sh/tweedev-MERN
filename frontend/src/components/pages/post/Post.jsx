import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, clearPost } from 'store/get-post/actions';
import { likePost, resetLikePost } from 'store/like-post/actions';
import { unLikePost, resetUnLikePost } from 'store/unlike-post/actions';
import { resetAddComment } from 'store/add-comment/actions';
import { deletePost, resetDeletePost } from 'store/delete-post/actions';
import { resetDeleteComment } from 'store/delete-comment/actions';

import moment from 'moment';
import { PageHeader, Loader, Error } from 'components/shared';
import { PostAddIcon } from 'components/icons';
import { IconButton } from '@material-ui/core';
import {
  ThumbUpAltIcon,
  ChatBubbleOutlineIcon,
  DeleteIcon,
} from 'components/icons';
import HomeAddComment from '../home/HomeAddComment';
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
  addCommentSuccess,
  resetAddComment,
  deletePost,
  resetDeletePost,
  resetDeleteComment,
  deleteCommentSuccess,
}) => {
  const history = useHistory();
  const [addComment, setAddComment] = useState(false);

  useEffect(() => {
    const { postId } = match.params;
    getPost(postId);
    resetLikePost();
    resetUnLikePost();
    resetAddComment();
    resetDeletePost();
    resetDeleteComment();
    return () => {
      clearPost();
    };
    // eslint-disable-next-line
  }, [
    getPost,
    clearPost,
    likeSuccess,
    unlikeSuccess,
    addCommentSuccess,
    deleteCommentSuccess,
  ]);

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
    if (!userInfo || !post?.likes) return;
    const isLike = post.likes?.filter(
      (like) => like.user.toString() === userInfo?._id
    ).length;
    if (isLike === 0) return false;
    else return true;
  };

  return (
    <>
      <HomeAddComment
        open={addComment}
        onClose={onCloseAddComment}
        postId={post?._id}
      />
      <PageHeader title='Post' icon={<PostAddIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='postDetails'>
          <div className='postDetails__header'>
            <div className='postDetails__header-left'>
              <img src={post?.avatar} alt='avatar' />
              <div>
                <h3>{post?.name}</h3>
                <h5>{post?.user?.email}</h5>
                <small>
                  {moment(post?.createdAt).startOf('hour').fromNow()}
                </small>
              </div>
            </div>
            {userInfo?._id === post?.user?._id && (
              <div>
                <IconButton
                  component='span'
                  onClick={() => {
                    deletePost(post?._id);
                    history.replace('/');
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            )}
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
              <IconButton component='span' onClick={onAddComment}>
                <ChatBubbleOutlineIcon />
              </IconButton>
            </div>
          </div>
          <PostComments comments={post?.comments} postId={post?._id} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
  post: state.post.post,
  loading: state.post.loading,
  errors: state.post.error,
  likeSuccess: state.likePost.success,
  unlikeSuccess: state.unlikePost.success,
  addCommentSuccess: state.addComment.success,
  deleteCommentSuccess: state.deleteComment.success,
});

const mapDispatchToProps = {
  getPost,
  clearPost,
  likePost,
  unLikePost,
  resetLikePost,
  resetUnLikePost,
  resetAddComment,
  deletePost,
  resetDeletePost,
  resetDeleteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
