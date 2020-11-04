const initialState = {
  loading: null,
  error: null,
  post: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'POST_SUCCESS':
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case 'POST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'POST_CLEAR':
      return {
        ...state,
        loading: null,
        error: null,
        post: null,
      };
    default:
      return state;
  }
}
