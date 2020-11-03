const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_CREATE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PROFILE_CREATE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'PROFILE_CREATE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PROFILE_CREATE_CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'PROFILE_CREATE_CLEAR_SUCCESS':
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
}
