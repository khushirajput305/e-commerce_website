import { getProductsreducer } from "./Productsreducer";
import { combineReducers } from "redux"

const rootreducers = combineReducers({
  getproductdata: getProductsreducer,
})

export default rootreducers;