import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userAuthReducer from './user-auth/reducer';
import profileReducer from './profile/reducer';
import githubReducer from './github-repos/reducer';
import profileCreateReducer from './profile-create/reducer';
import addExpReducer from './add-experience/reducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  profile: profileReducer,
  github: githubReducer,
  profileCreate: profileCreateReducer,
  addExp: addExpReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
