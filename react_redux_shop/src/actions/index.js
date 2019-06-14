export const ACTION_TYPES = {
    PRODUCTS_FETCH: "PRODUCTS_FETCH",
    PRODUCTS_FETCH_SUCCESS: "PRODUCTS_FETCH_SUCCESS",
    PRODUCTS_FETCH_ERROR: "PRODUCTS_FETCH_ERROR"
  };
  
  export const fetchProducts = () => ({
    type: ACTION_TYPES.PRODUCTS_FETCH
  });
  
  export const fetchProductsSuccess = products => ({
    type: ACTION_TYPES.PRODUCTS_FETCH_SUCCESS,
    products
  });
  
  export const fetchProductsError = () => ({
    type: ACTION_TYPES.PRODUCTS_FETCH_ERROR
  });

  
  export const fetchAllProducts = () => {
    return async dispatch => {
      try {
        dispatch(fetchProducts());
  
        const response = await fetch("http://react2018-shop.s3-website-eu-west-1.amazonaws.com/");
        const data = await response.json();
  
        const products = data;
  
        dispatch(fetchProductsSuccess(products));
        
      } catch (e) {
        dispatch(fetchProductsError());
      }
    };
  };



  