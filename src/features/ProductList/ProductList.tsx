import React from "react";
import { products } from "../../data/Products.ts";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
