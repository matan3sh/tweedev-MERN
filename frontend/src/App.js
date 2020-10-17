import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/layout/Sidebar';
import { Home, Users, Profile } from 'components/pages';

const App = () => {
  return (
    <Router>
      <div className='app__container'>
        <Sidebar />
        <div className='app__pages'>
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
