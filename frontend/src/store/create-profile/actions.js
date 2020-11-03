import axios from 'axios';
const PATH = '/api/profile';

export const createProfile = (profileData) => async (dispatch, getState) => {
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
    dispatch({ type: 'PROFILE_CREATE_REQUEST' });
    await axios.post(`${PATH}`, profileData, config);
    dispatch({ type: 'PROFILE_CREATE_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'PROFILE_CREATE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearCreateProfileError = () => (dispatch) => {
  dispatch({ type: 'PROFILE_CREATE_CLEAR_ERROR' });
};

export const clearCreateProfileSuccess = () => (dispatch) => {
  dispatch({ type: 'PROFILE_CREATE_CLEAR_SUCCESS' });
};
