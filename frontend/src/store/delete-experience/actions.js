import axios from 'axios';
const PATH = '/api/profile';

export const deleteExp = (expId) => async (dispatch, getState) => {
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
    dispatch({ type: 'DELETE_EXP_REQUEST' });
    await axios.delete(`${PATH}/experience/${expId}`, config);
    dispatch({ type: 'DELETE_EXP_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'DELETE_EXP_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearDeleteExpError = () => (dispatch) => {
  dispatch({ type: 'DELETE_EXP_CLEAR_ERROR' });
};

export const clearDeleteExpSuccess = () => (dispatch) => {
  dispatch({ type: 'DELETE_EXP_CLEAR_SUCCESS' });
};
