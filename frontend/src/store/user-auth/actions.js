import axios from 'axios';
const PATH = '/api/users';

export const login = (email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_AUTH_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/login`,
      { email, password },
      config
    );
    dispatch({ type: 'USER_AUTH_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_FAIL',
      payload: error.response.data.errors,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};

export const register = (name, email, password) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: 'USER_AUTH_REQUEST' });
    const { data } = await axios.post(
      `${PATH}/register`,
      { name, email, password },
      config
    );
    dispatch({ type: 'USER_AUTH_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_FAIL',
      payload: error.response.data.errors,
    });
  }
};

export const setError = (error) => (dispatch) => {
  dispatch({ type: 'SET_ERROR', payload: error });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: 'CLEAR_ERROR' });
};
