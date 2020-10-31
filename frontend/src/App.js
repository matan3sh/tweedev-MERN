import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GuestRoute } from 'routes';

import Sidebar from 'components/layout/Sidebar';
import { Login, Register, Home, Users, Profile } from 'components/pages';

const App = () => {
  return (
    <Router>
      <div className='app__container'>
        <Sidebar />
        <div className='app__pages'>
          <Switch>
            <Route exact path='/profile' component={Profile} />
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
