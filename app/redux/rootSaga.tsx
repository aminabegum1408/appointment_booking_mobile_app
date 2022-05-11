import { all } from "redux-saga/effects";
import { appointmentSaga } from "./BookAppointment/sagas";
import { loginSaga } from "./Login/sagas";
import { sellerSaga } from "./Seller/sagas";

export interface ActionInterface {
  type: string;
  payload: any;
}
export interface ResponseGenerator{
  success?:any
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export default function* rootSaga() {
  yield all( [loginSaga(),sellerSaga(),appointmentSaga()]);
}
