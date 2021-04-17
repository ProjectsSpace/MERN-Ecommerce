import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions.js";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [productId, dispatch]);

  return (
    <div className="row top">
      {/* Conditional Component loading */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
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
      )}
    </div>
  );
}

export default ProductScreen;
