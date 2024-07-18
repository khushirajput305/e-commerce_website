import { getProductsreducer } from "./Productsreducer";
import { combineReducers } from "redux";
import {getSecondProductsreducer} from "./Productsreducer"

const rootreducers = combineReducers({
    getSecondSlidedata:getSecondProductsreducer,
    getproductsdata:getProductsreducer
    
});



export default rootreducers;