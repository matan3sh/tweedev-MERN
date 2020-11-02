import axios from 'axios';
const PATH = '/api/profile';

export const addExp = (expData) => async (dispatch, getState) => {
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
    dispatch({ type: 'ADD_EXP_REQUEST' });
    await axios.post(`${PATH}/experience`, expData, config);
    dispatch({ type: 'ADD_EXP_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'ADD_EXP_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearAddExpError = () => (dispatch) => {
  dispatch({ type: 'ADD_EXP_CLEAR_ERROR' });
};

export const clearAddExpSuccess = () => (dispatch) => {
  dispatch({ type: 'ADD_EXP_CLEAR_SUCCESS' });
};
