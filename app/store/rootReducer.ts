import { combineReducers } from 'redux';
import Login from "../redux/Login/reducer/index";
import SellerReducre  from "../redux/Seller/reducer/index"
// Redux: Root Reducer
const rootReducer = combineReducers({
    login: Login,
    sellerReducre: SellerReducre
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;