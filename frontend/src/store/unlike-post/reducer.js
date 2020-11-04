const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UNLIKE_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'UNLIKE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'UNLIKE_POST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UNLIKE_POST_RESET':
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
