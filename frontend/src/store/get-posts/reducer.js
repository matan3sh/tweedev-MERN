const initialState = {
  loading: null,
  error: null,
  posts: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'POSTS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
