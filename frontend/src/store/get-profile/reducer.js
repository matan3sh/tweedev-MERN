const initialState = {
  loading: null,
  error: null,
  userProfile: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
      };
    case 'USER_PROFILE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_PROFILE_CLEAR':
      return {
        ...state,
        loading: null,
        error: null,
        userProfile: null,
      };
    default:
      return state;
  }
}
