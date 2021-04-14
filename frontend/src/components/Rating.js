import React from "react";
import "./Rating.css";

function Rating(props) {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <div>
        <span>
          <i
            className={
              rating >= 1
                ? "fa fa-star"
                : rating >= 0.5
                ? "fa fa-start-half-o"
                : "fa fa-start-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? "fa fa-star"
                : rating >= 1.5
                ? "fa fa-start-half-o"
                : "fa fa-start-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? "fa fa-star"
                : rating >= 2.5
                ? "fa fa-start-half-o"
                : "fa fa-start-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? "fa fa-star"
                : rating >= 3.5
                ? "fa fa-start-half-o"
                : "fa fa-start-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? "fa fa-star"
                : rating >= 4.5
                ? "fa fa-start-half-o"
                : "fa fa-start-o"
            }
          ></i>
        </span>
      </div>

      <span className="reviews">{numReviews} reviews </span>
    </div>
  );
}

export default Rating;
