const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_DELETE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'POST_DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'POST_DELETE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'POST_DELETE_RESET':
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
