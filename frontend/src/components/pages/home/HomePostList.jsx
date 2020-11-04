import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'store/get-posts/actions';
import { resetLikePost } from 'store/like-post/actions';
import { resetUnLikePost } from 'store/unlike-post/actions';

import { Error, Loader } from 'components/shared';
import HomePostItem from './HomePostItem';

const HomePostList = ({
  getPosts,
  posts,
  loading,
  errors,
  likePostSuccess,
  unLikePostSuccess,
  resetLikePost,
  resetUnLikePost,
}) => {
  useEffect(() => {
    getPosts();
    resetLikePost();
    resetUnLikePost();
    // eslint-disable-next-line
  }, [getPosts, likePostSuccess, unLikePostSuccess]);

  return (
    <>
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='posts'>
          {posts?.map((post, index) => (
            <HomePostItem key={index} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  errors: state.posts.error,
  likePostSuccess: state.likePost.success,
  unLikePostSuccess: state.unlikePost.success,
});

const mapDispatchToProps = {
  getPosts,
  resetLikePost,
  resetUnLikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePostList);
