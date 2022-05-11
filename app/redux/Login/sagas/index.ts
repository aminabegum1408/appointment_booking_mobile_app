import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionInterface, ResponseGenerator } from '../../rootSaga'
import { CREATE_ACCOUNT_REQ } from '../actions'
import * as types from "../actions";
import { bookAppointmentDetail } from '../../../services/apis/appointmentApi';
import { createUserAccount } from '../../../services/apis/loginApi';



function* createAccountReq(action: ActionInterface) {
  try {
    const response: ResponseGenerator = yield call(createUserAccount, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* loginSaga() {
  yield all([
    takeLatest(CREATE_ACCOUNT_REQ, createAccountReq),
  ])
}