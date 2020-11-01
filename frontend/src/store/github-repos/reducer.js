const initialState = {
  loading: null,
  repos: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GITHUB_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GITHUB_SUCCESS':
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case 'GITHUB_FAIL':
      return {
        ...state,
        loading: false,
      };
    case 'GITHUB_CLEAR':
      return {
        ...state,
        loading: null,
        repos: null,
      };
    default:
      return state;
  }
}
