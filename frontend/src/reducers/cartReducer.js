import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // Checking if exisitng item is going to be added to the cart
      // If so then existing item has to be replaced with the new item
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.product === newItem.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItem.product ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
