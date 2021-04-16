import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducer/productReducer";

const initialState = {};

// Getting product form reducer
const reducer = combineReducers({
  productList: productListReducer,
});

// to show redux store in the browser devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
