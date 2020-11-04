import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GuestRoute, ProtectedRoute } from 'routes';

import { BottomNav, Sidebar } from 'components/layout';
import {
  Login,
  Register,
  Home,
  Developers,
  Profile,
  Dashboard,
  DeveloperProfile,
  Post,
} from 'components/pages';

const App = () => {
  return (
    <Router>
      <div className='app__container'>
        <Sidebar />
        <div className='app__pages'>
          <Switch>
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <Route exact path='/developers' component={Developers} />
            <Route
              exact
              path='/developers/:profileId'
              component={DeveloperProfile}
            />
            <Route exact path='/posts/:postId' component={Post} />
            <GuestRoute exact path='/login' component={Login} />
            <GuestRoute exact path='/register' component={Register} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
      <BottomNav />
    </Router>
  );
};

export default App;
