import axios from 'axios';
const PATH = '/api/posts';

export const deletePost = (postId) => async (dispatch, getState) => {
  const {
    userAuth: { userInfo },
  } = getState();
  const config = {
    headers: {
      'x-auth-token': `${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: 'POST_DELETE_REQUEST' });
    await axios.delete(`${PATH}/${postId}`, config);
    dispatch({ type: 'POST_DELETE_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'POST_DELETE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetDeletePost = () => (dispatch) => {
  dispatch({ type: 'POST_DELETE_RESET' });
};
