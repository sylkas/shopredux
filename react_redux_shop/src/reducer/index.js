import { ACTION_TYPES } from "../actions";

const initState = { products: [], isLoading: true, isError: false };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PRODUCTS_FETCH:
      return { ...initState };
    case ACTION_TYPES.PRODUCTS_FETCH_SUCCESS:
      return { products: action.products, isLoading: false, isError: false };
    case ACTION_TYPES.PRODUCTS_FETCH_ERROR:
      return { products: [], isLoading: false, isError: true };
    default:
      return state;
  }
};
export default reducer;