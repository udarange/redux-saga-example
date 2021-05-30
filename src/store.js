import { combineReducers } from "redux";
import loginReducer from "./views/login/redux/reduce/loginReducer";
import homeReducer from "./views/home/redux/reduce/homeReducer";

export default combineReducers({
  loginReducer,
  homeReducer,
});
