import { createStore } from "redux";

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const setUser = (userInfo) => {
  return {
    type: LOGIN_USER,
    userInfo,
  };
};

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.userInfo };
    case LOGOUT_USER:
      return (state = {});
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;

const listener = () => {
  const state = store.getState();
  console.log("aaaa", state);
};

store.subscribe(listener);
