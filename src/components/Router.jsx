import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Login from './login/Login';

export default () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
};
