import React, { useEffect } from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";


const ProductsList = ({ products, isLoading, isError, fetchAllProducts }) => {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }


  return (
   
    <div className={styles.Products}>
      
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
