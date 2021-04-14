import React from "react";
import Product from "../components/Product";
import { data } from "../data/data.js";

function HomeScreen() {
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default HomeScreen;
