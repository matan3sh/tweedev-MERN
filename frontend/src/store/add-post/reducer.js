const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'ADD_POST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_POST_RESET':
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
