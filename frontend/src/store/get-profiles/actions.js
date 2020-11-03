import axios from 'axios';
const PATH = '/api/profile';

export const getProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: 'PROFILES_REQUEST' });
    const { data } = await axios.get(`${PATH}`);
    dispatch({ type: 'PROFILES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PROFILES_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearProfiles = () => (dispatch) => {
  dispatch({ type: 'PROFILES_CLEAR' });
};
