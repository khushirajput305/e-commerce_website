const products = [];
const secondData = [];

export const getProductsreducer = (state = { products }, action) => {
  switch (action.type) {
    case "SUCCESS_GET_PRODUCTS":
      return { products: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { products: action.payload };
    default:
      return state;
  }
};



export const getSecondProductsreducer = (state = { secondData }, action) => {
  switch (action.type) {
    case "SUCCESS_GET_PRODUCTS":
      return { secondData: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { secondData: action.payload };
    default:
      return state;
  }
};
