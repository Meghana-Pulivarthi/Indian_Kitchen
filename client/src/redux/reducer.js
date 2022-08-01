import { combineReducers } from "redux";
import priceReducer from "./price/slice";
const rootReducer = combineReducers({
    price: priceReducer,
});
export default rootReducer;
