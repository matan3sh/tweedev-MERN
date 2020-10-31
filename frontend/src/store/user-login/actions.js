import axios from 'axios';
const PATH = '/api/users';

export const login = (email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/login`,
      { email, password },
      config
    );
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload: error.response.data.errors,
    });
  }
};

export const clearUserLogin = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: 'CLEAR_ERROR' });
};
