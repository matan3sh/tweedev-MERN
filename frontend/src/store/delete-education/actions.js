import axios from 'axios';
const PATH = '/api/profile';

export const deleteEdu = (eduId) => async (dispatch, getState) => {
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
    dispatch({ type: 'DELETE_EDU_REQUEST' });
    await axios.delete(`${PATH}/education/${eduId}`, config);
    dispatch({ type: 'DELETE_EDU_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'DELETE_EDU_FAIL',
      payload: error.response?.data?.errors,
    });
  }
};

export const clearDeleteEduError = () => (dispatch) => {
  dispatch({ type: 'DELETE_EDU_CLEAR_ERROR' });
};

export const clearDeleteEduSuccess = () => (dispatch) => {
  dispatch({ type: 'DELETE_EDU_CLEAR_SUCCESS' });
};
