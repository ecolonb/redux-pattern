import React, { useContext } from 'react';
import Context from '../../context/gobalContext';
import logo from '../../assets/images/numina.svg';
import './styles.css';

export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className='custom-navbar'>
      <div className='logo'>
        <img src={logo} alt='Logo React'></img>
      </div>
      {state.logged && (
        <div className='user-name'>
          <span>{state.user_name}</span>
          <button
            onClick={() => {
              dispatch({ type: 'logout' });
            }}
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
};
