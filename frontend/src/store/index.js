import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userAuthReducer from './user-auth/reducer';
import profileReducer from './profile/reducer';
import githubReducer from './github-repos/reducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  profile: profileReducer,
  github: githubReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
