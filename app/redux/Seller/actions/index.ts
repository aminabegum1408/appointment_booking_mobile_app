export const GET_SELLER_DETAIL_LIST_REQ = 'GET_SELLER_DETAIL_LIST_REQ';
export const GET_SELLER_DETAIL_LIST_RESP = 'GET_SELLER_DETAIL_LIST_RESP';

export const GET_SLOT_LIST_REQ = 'GET_SLOT_LIST_REQ';
export const GET_SLOT_LIST_RESP = 'GET_SLOT_LIST_RESP';


// Get seller List
export function triggerGetSellerDetails(data: any) {
  return { type: GET_SELLER_DETAIL_LIST_REQ, payload: data }
}

export function triggerGetSellerDetailsReso(sellerDetails: any) {
  return { type: GET_SELLER_DETAIL_LIST_RESP, payload: sellerDetails }
}

// Get slot of selected date
export function triggerGetSlotList(param: any) {
  return { type: GET_SLOT_LIST_REQ, payload: param }
}

export function triggerGetSlotListResp(sellerDetails: any) {
  return { type: GET_SLOT_LIST_RESP, payload: sellerDetails }
}