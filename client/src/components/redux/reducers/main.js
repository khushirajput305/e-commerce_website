import { getProductsreducer } from "./Productsreducer";
import { getSecondSlideProductsreducer } from "./Productsreducer";
import { combineReducers } from "redux"

const rootreducers = combineReducers({
  getproductdata: getProductsreducer,
  getSecondSlidedata: getSecondSlideProductsreducer,
})

export default rootreducers;