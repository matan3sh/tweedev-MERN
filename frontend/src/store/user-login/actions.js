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
    localStorage.setItem('userToken', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userToken');
  dispatch({ type: 'USER_LOGOUT' });
};
