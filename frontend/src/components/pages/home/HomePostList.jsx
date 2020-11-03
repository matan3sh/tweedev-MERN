import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'store/get-posts/actions';

import { Error, Loader } from 'components/shared';
import HomePostItem from './HomePostItem';

const HomePostList = ({ getPosts, posts, loading, errors }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
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
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePostList);
