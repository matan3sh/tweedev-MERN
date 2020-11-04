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
import postsReducer from './get-posts/reducer';
import likePostReducer from './like-post/reducer';
import unlikePostReducer from './unlike-post/reducer';
import postReducer from './get-post/reducer';
import addCommentReducer from './add-comment/reducer';

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
  posts: postsReducer,
  likePost: likePostReducer,
  unlikePost: unlikePostReducer,
  post: postReducer,
  addComment: addCommentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
