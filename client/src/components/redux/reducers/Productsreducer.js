const products=[]
const second_data = []

export const getProductsreducer=(state={products},action)=>{
  switch(action.type){
    case "SUCCESS_GET_PRODUCTS":
      return {products:action.payload}
    case "FAIL_GET_PRODUCTS":
      return {products:action.payload}
    default : return state
  }
}

export const getSecondSlideProductsreducer=(state={second_data},action)=>{
  switch(action.type){
    case "SUCCES_GET_PRODUCTS":
      return {second_data : action.payload}
    case "FAIL_GET_PRODUCTS":
      return {second_data : action.payload}
    default : return state
  }
}