const initialState = {
  loading: null,
  error: null,
  profiles: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PROFILES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PROFILES_SUCCESS':
      return {
        ...state,
        loading: false,
        profiles: action.payload,
      };
    case 'PROFILES_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PROFILES_CLEAR':
      return {
        ...state,
        loading: null,
        error: null,
        profiles: null,
      };
    default:
      return state;
  }
}
