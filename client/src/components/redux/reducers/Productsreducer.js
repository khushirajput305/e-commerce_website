const products=[]


export const getProductsreducer=(state={products},action)=>{
  switch(action.type){
    case "SUCCESS_GET_PRODUCTS":
      return {products:action.payload}
    case "FAIL_GET_PRODUCTS":
      return {products:action.payload}
    default : return state
  }
}
const initialState = {
  second_data: [], // Ensures it's always defined
  loading: false,
  error: null
};
export const getSecondSlideReducer = (state = initialState, action) => {
  switch (action.type) {
      case "SECOND_SLIDE_REQUEST":
          return { ...state, loading: true };
      case "SECOND_SLIDE_SUCCESS":
          return { ...state, loading: false, second_data: action.payload };
      case "SECOND_SLIDE_FAIL":
          return { ...state, loading: false, error: action.payload };
      default:
          return state;
  }
};
