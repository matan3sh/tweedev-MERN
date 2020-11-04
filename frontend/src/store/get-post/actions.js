import axios from 'axios';
const PATH = '/api/posts';

export const getPost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: 'POST_REQUEST' });
    const { data } = await axios.get(`${PATH}/${postId}`);
    dispatch({ type: 'POST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'POST_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearPost = () => (dispatch) => {
  dispatch({ type: 'POST_CLEAR' });
};
