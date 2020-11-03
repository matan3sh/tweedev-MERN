import axios from 'axios';
const PATH = '/api/posts';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: 'POSTS_REQUEST' });
    const { data } = await axios.get(`${PATH}`);
    dispatch({ type: 'POSTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'POSTS_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};
