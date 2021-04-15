import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { data } from "./data/data";

const initialState = {};

const reducer = (state, action) => {
  return { products: data.products };
};

// to show redux store in the browser devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
