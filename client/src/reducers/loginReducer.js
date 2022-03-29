const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
export const setUser = (userInfo, loginState) => {
  return {
    type: LOGIN_USER,
    userInfo,
    loginState,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

const initialState = {
  isLogin: false,
};
export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { name: action.userInfo, isLogin: action.loginState };
    case LOGOUT_USER:
      return (state = {});
    default:
      return state;
  }
}
