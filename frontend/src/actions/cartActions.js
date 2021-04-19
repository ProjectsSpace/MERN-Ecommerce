import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      inStock: data.inStock,
      product: data._id,
      qty,
    },
  });

  // Adding cart item to the localStorage to make it persistent
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
