import axios from 'axios';
const PATH = '/api/posts';

export const addPost = (post) => async (dispatch, getState) => {
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
    dispatch({ type: 'ADD_POST_REQUEST' });
    await axios.post(`${PATH}`, post, config);
    dispatch({ type: 'ADD_POST_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'ADD_POST_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const resetAddPost = () => (dispatch) => {
  dispatch({ type: 'ADD_POST_RESET' });
};
