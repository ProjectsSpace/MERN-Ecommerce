import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

// Adding item to cart
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

// Removing item from cart
export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Saving shipping address to store
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });

  // Saving shipping address to localStorage
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// Saving payment method action
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
