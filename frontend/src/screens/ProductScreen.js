import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.js";
import { data } from "../data/data.js";

function ProductScreen(props) {
  const product = data.products.find(
    (item) => item._id === parseInt(props.match.params.id)
  );

  if (!product) return <div>Product no found</div>;

  return (
    <>
      <Link to="/">Back to products</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name} </h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price: {product.price} </li>
            <li>Description {product.description} </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.inStock > 0 ? (
                      <span className="instock">In Stock</span>
                    ) : (
                      <span className="not-instock">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
