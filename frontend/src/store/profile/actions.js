import axios from 'axios';
const PATH = '/api/profile';

export const getProfile = () => async (dispatch, getState) => {
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
    dispatch({ type: 'USER_PROFILE_REQUEST' });
    const { data } = await axios.get(`${PATH}/me`, config);
    dispatch({ type: 'USER_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_PROFILE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearProfile = () => (dispatch) => {
  dispatch({ type: 'USER_PROFILE_CLEAR' });
};
