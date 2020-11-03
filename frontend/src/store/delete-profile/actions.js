import axios from 'axios';
const PATH = '/api/profile';

export const deleteProfile = () => async (dispatch, getState) => {
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
    dispatch({ type: 'PROFILE_DELETE_REQUEST' });
    await axios.delete(`${PATH}`, config);
    dispatch({ type: 'PROFILE_DELETE_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'PROFILE_DELETE_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearDeleteProfileError = () => (dispatch) => {
  dispatch({ type: 'PROFILE_DELETE_CLEAR_ERROR' });
};

export const clearDeleteProfileSuccess = () => (dispatch) => {
  console.log(123);
  dispatch({ type: 'PROFILE_DELETE_CLEAR_SUCCESS' });
};
