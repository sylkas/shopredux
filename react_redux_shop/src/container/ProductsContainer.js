import { connect } from "react-redux";

import Products from "../components/ProductsList/ProductsList";

import { fetchAllProducts } from "../actions";

const mapStateToProps = state => ({
  products: state.products,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
    fetchAllProducts
};


const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;