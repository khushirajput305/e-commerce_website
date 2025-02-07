import { getProductsreducer } from "./Productsreducer";
import { getSecondSlideReducer } from "./Productsreducer";
import { combineReducers } from "redux"

const rootreducers = combineReducers({
  getproductdata: getProductsreducer,
  getSecondSlidedata: getSecondSlideReducer,
})

export default rootreducers;