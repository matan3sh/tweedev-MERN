import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userAuthReducer from './user-auth/reducer';
import profileReducer from './profile/reducer';
import githubReducer from './github-repos/reducer';
import profileCreateReducer from './create-profile/reducer';
import addExpReducer from './add-experience/reducer';
import addEduReducer from './add-education/reducer';
import deleteExpReducer from './delete-experience/reducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  profile: profileReducer,
  github: githubReducer,
  profileCreate: profileCreateReducer,
  addExp: addExpReducer,
  addEdu: addEduReducer,
  deleteExp: deleteExpReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
