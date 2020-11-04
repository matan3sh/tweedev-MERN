import axios from 'axios';
const PATH = '/api/posts';

export const unLikePost = (post) => async (dispatch, getState) => {
  const {
    userAuth: { userInfo },
  } = getState();
  const config = {
    headers: {
      'x-auth-token': `${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: 'UNLIKE_POST_REQUEST' });
    await axios.put(`${PATH}/unlike/${post._id}`, post, config);
    dispatch({ type: 'UNLIKE_POST_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'UNLIKE_POST_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetUnLikePost = () => (dispatch) => {
  dispatch({ type: 'UNLIKE_POST_RESET' });
};
