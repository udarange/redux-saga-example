import {
  FETCH_PATIENT_LIST_ACTION,
  FETCH_PATIENT_LIST_FAILURE_ACTION,
  FETCH_PATIENT_LIST_SUCCESS_ACTION,
} from "./actionType";

export const fetchPatientDataAction = () => ({
  type: FETCH_PATIENT_LIST_ACTION,
});

export const fetchPatientDataSuccessAction = (patientList) => ({
  type: FETCH_PATIENT_LIST_SUCCESS_ACTION,
  patientList,
});

export const fetchPatientDataFailureAction = () => ({
  type: FETCH_PATIENT_LIST_FAILURE_ACTION,
});
