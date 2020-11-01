import axios from 'axios';
const PATH = '/api/profile';

export const getRepos = (username) => async (dispatch) => {
  try {
    dispatch({ type: 'GITHUB_REQUEST' });
    const { data } = await axios.get(`${PATH}/github/${username}`);
    dispatch({ type: 'GITHUB_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const clearRepos = () => (dispatch) => {
  dispatch({ type: 'GITHUB_CLEAR' });
};
