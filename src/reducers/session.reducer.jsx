const LOGIN = 'login',
  LOGOUT = 'logout';

export const initialState = { user_name: '', logged: false };

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user_name: action.payload, logged: true };

    case LOGOUT:
      return { user_name: '', logged: false };

    default:
      return { ...state };
  }
};
