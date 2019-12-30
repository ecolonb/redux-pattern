import React, { useReducer } from 'react';
import { sessionReducer, initialState } from '../../reducers/session.reducer';

import Context from '../../context/gobalContext';

export default ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
