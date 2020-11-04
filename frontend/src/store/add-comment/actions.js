import axios from 'axios';
const PATH = '/api/posts';

export const addComment = (comment, postId) => async (dispatch, getState) => {
  const {
    userAuth: { userInfo },
  } = getState();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: 'ADD_COMMENT_REQUEST' });
    await axios.post(`${PATH}/comment/${postId}`, comment, config);
    dispatch({ type: 'ADD_COMMENT_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'ADD_COMMENT_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetAddComment = () => (dispatch) => {
  dispatch({ type: 'ADD_COMMENT_RESET' });
};
