import React from "react";

function CartScreen(props) {
  const productId = props.match.params.id;
  console.log(props);
  const qty = props.location.search
    ? new URLSearchParams(new URL(window.location.href).search).get("qty")
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add To Cart: ProductID: {productId} Qty: {qty}{" "}
      </p>
    </div>
  );
}

export default CartScreen;
