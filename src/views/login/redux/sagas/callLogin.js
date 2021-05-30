import { call, put } from 'redux-saga/effects'
import { loginFailureAction, loginSuccessAction } from '../actions/loginAction';

function fetchUserApi(email, password) {
  // axios.post('https://randomuser.me/api', {
  //   email: action.email,
  //   password: action.password
  // })
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });
  //
  return 'nfeife87389niu4bt75t4g0'
}

export default function* callLogin(action) {
  try {
    const token = yield call(fetchUserApi, action.email, action.password);
    yield put(loginSuccessAction(token));
  }
  catch (e) {
    yield put(loginFailureAction());
  }
}
