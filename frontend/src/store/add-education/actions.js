import axios from 'axios';
const PATH = '/api/profile';

export const addEdu = (eduData) => async (dispatch, getState) => {
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
    dispatch({ type: 'ADD_EDU_REQUEST' });
    await axios.post(`${PATH}/education`, eduData, config);
    dispatch({ type: 'ADD_EDU_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'ADD_EDU_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearAddEduError = () => (dispatch) => {
  dispatch({ type: 'ADD_EDU_CLEAR_ERROR' });
};

export const clearAddEduSuccess = () => (dispatch) => {
  dispatch({ type: 'ADD_EDU_CLEAR_SUCCESS' });
};
