import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Context from '../../context/gobalContext';
// Custom hook
import useFormInput from '../../hooks/useFormInput';

export default () => {
  const { state, dispatch } = useContext(Context);
  const user_name = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    if (user_name.value.trim() === '') {
      return;
    }
    console.log('User name is empty!');
    dispatch({ type: 'login', payload: user_name.value });
  }

  return state.logged ? (
    <Redirect to='/' />
  ) : (
    <div className='login-container'>
      <form method='POST' onSubmit={handleSubmit}>
        <input {...user_name}></input>
        {user_name.value}
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
};
