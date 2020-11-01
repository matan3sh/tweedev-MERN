import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GuestRoute, ProtectedRoute } from 'routes';

import Sidebar from 'components/layout/Sidebar';
import {
  Login,
  Register,
  Home,
  Users,
  Profile,
  Dashboard,
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
            <Route exact path='/users' component={Users} />
            <GuestRoute exact path='/login' component={Login} />
            <GuestRoute exact path='/register' component={Register} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
