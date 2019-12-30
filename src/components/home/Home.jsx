import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Context from '../../context/gobalContext';

export default () => {
  const { state, dispatch } = useContext(Context);
  return state.logged ? (
    <div className='home'>
      <p>{state.user_name} you are logged!</p>
      <button
        onClick={() => {
          dispatch({ type: 'logout' });
        }}
      >
        Salir
      </button>
    </div>
  ) : (
    <Redirect to='/login' />
  );
};
