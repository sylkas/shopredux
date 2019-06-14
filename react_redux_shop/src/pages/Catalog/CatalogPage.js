import React, { Component } from "react";

import HeaderBig from "components/Header/HeaderBig";

import { Provider } from "react-redux";
import store from "../../store";
import ProductsContainer from "../../container/ProductsContainer";

import ProductService from "services/ProductService";

import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

class CatalogPage extends Component {
  manufacturers = ["All", ...ProductService.getManufactures()];
  initFilters = { text: "", manufacture: "All" };

  state = {
    products: ProductService.getProducts()
  };

  handleFilterChange = filters => {
    const filteredProducts = ProductService.getProductsByFilter({
      name: filters.text,
      manufacture: filters.manufacture === "All" ? null : filters.manufacture
    });

    this.setState({ products: filteredProducts });
  };

  render() {
    const {
      state: { products },
      manufacturers,
      initFilters
    } = this;

    return (
      <>
        <Provider store={store}>
          <HeaderBig>Catalog</HeaderBig>
          <div className={styles.Catalog}>
            <div className={styles.ColumnLeft}>
              <Filters
                initValue={initFilters}
                onChange={this.handleFilterChange}
                manufacturers={manufacturers}
              />
            </div>

            <div className={styles.ColumnRight}>
              <ProductsContainer />
            </div>
          </div>
        </Provider>
      </>
    );
  }
}

export default CatalogPage;
