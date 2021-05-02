import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

function Header() {
  // Getting cartItems from the redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Geting user information from the redux store
  const userSignin = useSelector((state) => state.userSignin);

  // Extracting userInfo
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  // handling sign out
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          MERN-commerce
        </Link>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
            </Link>
            <ul className="dropdown-content">
              <Link to="#signout" onClick={signoutHandler}>
                Sign Out
              </Link>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
