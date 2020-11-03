const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_DELETE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PROFILE_DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'PROFILE_DELETE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PROFILE_DELETE_CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'PROFILE_DELETE_CLEAR_SUCCESS':
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
}
