const initialState = {
  loading: null,
  error: null,
  userInfo: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        loading: null,
        error: null,
        userInfo: null,
      };
    default:
      return state;
  }
}
