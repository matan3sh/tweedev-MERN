const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_EDU_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_EDU_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'DELETE_EDU_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_EDU_CLEAR_SUCCESS':
      return {
        ...state,
        success: null,
      };
    case 'DELETE_EDU_CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
