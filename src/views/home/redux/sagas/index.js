import { takeLatest } from 'redux-saga/effects'
import { FETCH_PATIENT_LIST_ACTION } from '../actions/actionType';
import callPatientList from './callPatientList';

export default function* homeSaga() {
  yield takeLatest(FETCH_PATIENT_LIST_ACTION, callPatientList);
}
