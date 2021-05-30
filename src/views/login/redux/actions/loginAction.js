import {
  LOGIN_ACTION,
  LOGIN_FAILURE_ACTION,
  LOGIN_SUCCESS_ACTION,
} from "./actionType";

export const loginAction = (email, password) => ({
  type: LOGIN_ACTION,
  email,
  password,
});

export const loginSuccessAction = (token) => ({
  type: LOGIN_SUCCESS_ACTION,
  token,
});

export const loginFailureAction = () => ({
  type: LOGIN_FAILURE_ACTION,
});
