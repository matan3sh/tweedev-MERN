import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userAuthReducer from './user-auth/reducer';
import profileReducer from './get-profile/reducer';
import githubReducer from './github-repos/reducer';
import profileCreateReducer from './create-profile/reducer';
import addExpReducer from './add-experience/reducer';
import addEduReducer from './add-education/reducer';
import deleteExpReducer from './delete-experience/reducer';
import deleteEduReducer from './delete-education/reducer';
import deleteProfileReducer from './delete-profile/reducer';
import profilesReducer from './get-profiles/reducer';
import devProfileReducer from './get-dev-profile/reducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  profile: profileReducer,
  github: githubReducer,
  profileCreate: profileCreateReducer,
  addExp: addExpReducer,
  addEdu: addEduReducer,
  deleteExp: deleteExpReducer,
  deleteEdu: deleteEduReducer,
  deleteProfile: deleteProfileReducer,
  profiles: profilesReducer,
  devProfile: devProfileReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
