import axios from 'axios';
const PATH = '/api/posts';

export const likePost = (post) => async (dispatch, getState) => {
  const {
    userAuth: { userInfo },
  } = getState();
  const config = {
    headers: {
      'x-auth-token': `${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: 'LIKE_POST_REQUEST' });
    await axios.put(`${PATH}/like/${post._id}`, post, config);
    dispatch({ type: 'LIKE_POST_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'LIKE_POST_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetLikePost = () => (dispatch) => {
  dispatch({ type: 'LIKE_POST_RESET' });
};
