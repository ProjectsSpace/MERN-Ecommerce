import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Amazona
        </Link>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
