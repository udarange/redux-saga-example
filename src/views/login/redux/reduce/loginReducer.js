import {
  LOGIN_ACTION,
  LOGIN_FAILURE_ACTION,
  LOGIN_SUCCESS_ACTION,
} from "../actions/actionType";

let initialState = {
  token: undefined,
  loginIsLoading: false,
  loginHasError: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, loginIsLoading: true, loginHasError: false };
    case LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        token: action.token,
        loginIsLoading: false,
        loginHasError: false,
      };
    case LOGIN_FAILURE_ACTION:
      return {
        ...state,
        token: undefined,
        loginIsLoading: false,
        loginHasError: true,
      };
    default:
      return state;
  }
}
