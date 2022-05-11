import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionInterface, ResponseGenerator } from '../../rootSaga'
import { BOOK_APPOINTMENT_REQ } from '../actions'
import * as types from "../actions";
import { bookAppointmentDetail } from '../../../services/apis/appointmentApi';



function* saveAppointment(action: ActionInterface) {
  try {
    const response: ResponseGenerator = yield call(bookAppointmentDetail, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* appointmentSaga() {
  yield all([
    takeLatest(BOOK_APPOINTMENT_REQ, saveAppointment),
  ])
}