import { call, put } from 'redux-saga/effects'
import {
  fetchPatientDataFailureAction,
  fetchPatientDataSuccessAction
} from '../actions/homeAction';
import axios from 'axios';

function fetchPatientData(token) {
  const options = {
    headers: { 'token': token }
  };

  return axios.get('https://randomuser.me/api/?results=10', options)
  .then((response) => response.data)
  .catch(error => error)
}

export default function* callPatientList(action) {
  const token = "xxxxxxxxxx"
  try {
    // console.log("-------------B---------------")
    const patientData = yield call(fetchPatientData, token);
    yield put(fetchPatientDataSuccessAction(patientData.results));
  }
  catch (e) {
    yield put(fetchPatientDataFailureAction());
  }
}
