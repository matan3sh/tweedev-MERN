const initialState = {
  loading: null,
  error: null,
  success: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EDU_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_EDU_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'ADD_EDU_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_EDU_CLEAR_SUCCESS':
      return {
        ...state,
        success: null,
      };
    case 'ADD_EDU_CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
