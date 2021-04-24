import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Header from "./components/Header";
import SigninScreen from "./screens/SigninScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="grid-container">
        {/* Website header component */}
        <Header />

        {/* Routes for the frontend */}
        <main>
          <Route path="/cart/:id?" component={CartScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
