import React from 'react';
import moment from 'moment';

const PostComments = ({ comments }) => {
  return (
    <div className='comment'>
      {comments?.map((comment) => (
        <div className='comment__item' key={comment._id}>
          <img src={comment.avatar} alt='avatar' />
          <div className='comment__right'>
            <h3>{comment.name}</h3>
            <small>{moment(comment.date).startOf('hour').fromNow()}</small>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
