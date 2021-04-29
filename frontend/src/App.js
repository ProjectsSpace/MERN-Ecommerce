import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Header from "./components/Header";
import SigninScreen from "./screens/SigninScreen";
import Footer from "./components/Footer";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        {/* Website header component */}
        <Header />

        {/* Routes for the frontend */}
        <main>
          <Route path="/cart/:id?" component={CartScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/payment" component={PaymentMethodScreen} exact />
          <Route path="/shipping" component={ShippingAddressScreen} exact />
          <Route path="/signin" component={SigninScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/" component={HomeScreen} exact />
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
