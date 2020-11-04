import axios from 'axios';
const PATH = '/api/posts';

export const deleteComment = (postId, commentId) => async (
  dispatch,
  getState
) => {
  const {
    userAuth: { userInfo },
  } = getState();
  const config = {
    headers: {
      'x-auth-token': `${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: 'COMMENT_DELETE_REQUEST' });
    await axios.delete(`${PATH}/comment/${postId}/${commentId}`, config);
    dispatch({ type: 'COMMENT_DELETE_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'COMMENT_DELETE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetDeleteComment = () => (dispatch) => {
  dispatch({ type: 'COMMENT_DELETE_RESET' });
};
