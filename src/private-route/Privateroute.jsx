import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/gobalContext';

export default function({ component: Component, ...props }) {
  const { state } = useContext(Context);

  return state.logged ? <Component {...props} /> : <Redirect to='/login' />;
}
