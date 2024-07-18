export const getProducts = () => async (dispatch) => {
    try {
      const data = await fetch("/getproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();
      console.log(res);
      dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
    } catch (error) {
      dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
    }
  };
  
  export const secondSlideData = () => async (dispatch) => {
    try {
      const second_Data = await fetch("/secondSlideProduct", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await second_Data.json();
      console.log(res);
      dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
    } catch (error) {
      dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
    }
  };
  