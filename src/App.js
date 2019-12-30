import React from 'react';
import './global-styles.css';
import Store from './components/store/Store';
import Router from './components/Router';

function App() {
  return (
    <Store>
      <Router />
    </Store>
  );
}

export default App;
