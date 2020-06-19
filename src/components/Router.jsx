import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Login from './login/Login';
import Hello from './login/Hello';
import Privateroute from '../private-route/Privateroute';

export default () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Privateroute component={Home} myKey={'miKey'} />}
          />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/hello' component={Hello} />
        </Switch>
      </Router>
    </>
  );
};
