const initialState = {
  loading: null,
  error: null,
  devProfile: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DEV_PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DEV_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        devProfile: action.payload,
      };
    case 'DEV_PROFILE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DEV_PROFILE_CLEAR':
      return {
        ...state,
        loading: null,
        error: null,
        devProfile: null,
      };
    default:
      return state;
  }
}
