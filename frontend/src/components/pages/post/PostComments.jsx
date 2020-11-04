import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from 'store/delete-comment/actions';

import moment from 'moment';
import { IconButton } from '@material-ui/core';
import { DeleteIcon } from 'components/icons';

const PostComments = ({ comments, userInfo, deleteComment, postId }) => {
  return (
    <div className='comment'>
      {comments?.map((comment) => (
        <div className='comment__item' key={comment._id}>
          <div>
            <img src={comment.avatar} alt='avatar' />
            <div className='comment__right'>
              <h3>{comment.name}</h3>
              <small>{moment(comment.date).startOf('hour').fromNow()}</small>
              <p>{comment.text}</p>
            </div>
          </div>
          {userInfo._id === comment.user.toString() && (
            <div>
              <IconButton
                component='span'
                onClick={() => deleteComment(postId, comment._id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
});
const mapDispatchToProps = {
  deleteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
