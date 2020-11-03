import axios from 'axios';
const PATH = '/api/profile';

export const getDevProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DEV_PROFILE_REQUEST' });
    const { data } = await axios.get(`${PATH}/user/${id}`);
    dispatch({ type: 'DEV_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'DEV_PROFILE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearDevProfile = () => (dispatch) => {
  dispatch({ type: 'DEV_PROFILE_CLEAR' });
};
