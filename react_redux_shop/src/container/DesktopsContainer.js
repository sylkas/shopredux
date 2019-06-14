import { connect } from "react-redux";

import Products from "../components/ProductsList/ProductsList";

import { fetchAllProducts } from "../actions";

const mapStateToProps = state => ({
  products: state.products.filter(el => el.category === 'desktop'),
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
    fetchAllProducts
};


const DesktopsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default DesktopsContainer;