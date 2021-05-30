import { takeLatest } from 'redux-saga/effects'
import { LOGIN_ACTION } from '../actions/actionType';
import callLogin from './callLogin';

export default function* loginSaga() {
  yield takeLatest(LOGIN_ACTION, callLogin);
}
