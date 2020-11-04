const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COMMENT_DELETE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'COMMENT_DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'COMMENT_DELETE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'COMMENT_DELETE_RESET':
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
