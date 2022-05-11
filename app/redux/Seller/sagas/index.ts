import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionInterface, ResponseGenerator } from '../../rootSaga'
import { GET_SELLER_DETAIL_LIST_REQ } from '../actions'
import * as types from "../actions";
import { fetchSellerDetails, fetchSlotListBySelectedDate } from '../../../services/apis/SellerApi';



function* getSellerDetails(action: ActionInterface) {
  try {
    const response: ResponseGenerator = yield call(fetchSellerDetails, action.payload);
    if (response.success.data.status == 1) {
      yield put(types.triggerGetSellerDetailsReso(response.success.data.data));
    }
  } catch (error) {
    console.log(error);
  }
}
function* fetchSlotList(action: ActionInterface) {
  try {
    const response: ResponseGenerator = yield call(fetchSlotListBySelectedDate, action.payload);
    if (response.success.data.status == 1) {
      yield put(types.triggerGetSlotListResp(response.success.data.data));
    }
  } catch (error) {
    console.log(error);
  }
}


export function* sellerSaga() {
  yield all([
    takeLatest(GET_SELLER_DETAIL_LIST_REQ, getSellerDetails),
    takeLatest(types.GET_SLOT_LIST_REQ, fetchSlotList),
  ])
}