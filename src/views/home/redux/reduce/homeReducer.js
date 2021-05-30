import {
  FETCH_PATIENT_LIST_ACTION,
  FETCH_PATIENT_LIST_FAILURE_ACTION,
  FETCH_PATIENT_LIST_SUCCESS_ACTION,
} from "../actions/actionType";

let initialState = {
  patientList: [],
  patientListIsLoading: false,
  patientListHasError: false,
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PATIENT_LIST_ACTION:
      return {
        ...state,
        patientListIsLoading: true,
        patientListHasError: false,
      };
    case FETCH_PATIENT_LIST_SUCCESS_ACTION:
      return {
        ...state,
        patientList: action.patientList,
        patientListIsLoading: false,
        patientListHasError: false,
      };
    case FETCH_PATIENT_LIST_FAILURE_ACTION:
      return {
        ...state,
        patientList: [],
        patientListIsLoading: false,
        patientListHasError: true,
      };
    default:
      return state;
  }
}
