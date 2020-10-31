import { userFromStorage } from 'services/localStorageService';

const initialState = {
  loading: null,
  error: null,
  userInfo: userFromStorage,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case 'USER_REGISTER_FAIL':
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
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
