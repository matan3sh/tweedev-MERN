import axios from 'axios';
const PATH = '/api/users';

export const register = (name, email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/register`,
      { name, email, password },
      config
    );
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload: error.response.data.errors,
    });
  }
};

export const clearUserRegister = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: 'CLEAR_ERROR' });
};
