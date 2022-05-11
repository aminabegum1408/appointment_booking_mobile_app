import {
  GET_SELLER_DETAIL_LIST_RESP, GET_SLOT_LIST_RESP
} from '../actions'

interface SellerState {
  sellerDetails: Array<any> | null,
  slotList: Array<{
    startAt: string;
    date: string;
    endAt: string
  }>
}


const initCommonState: SellerState = {
  sellerDetails: [],
  slotList: []
}


export default function SellerReducre(state = initCommonState, action: any) {
  switch (action.type) {
    case GET_SELLER_DETAIL_LIST_RESP:
      return { ...state, sellerDetails: action.payload }
    case GET_SLOT_LIST_RESP:
      return { ...state, slotList: action.payload }
    default:
      return state
  }
}
