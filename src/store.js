import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from "./views/login/redux/reduce/loginReducer";
import homeReducer from "./views/home/redux/reduce/homeReducer";
import createSagaMiddleware from 'redux-saga'
import { spawn } from "redux-saga/effects";
import loginSaga from './views/login/redux/sagas';
import homeSaga from './views/home/redux/sagas';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
});

function* rootSaga() {
  yield spawn(loginSaga)
  yield spawn(homeSaga)
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga)

export default store
