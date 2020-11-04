const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LIKE_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LIKE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'LIKE_POST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LIKE_POST_RESET':
      return {
        ...state,
        loading: null,
        error: null,
        success: null,
      };
    default:
      return state;
  }
}
