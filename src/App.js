import React from "react";
import ProductsPage from "./components/Products/ProductsPage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/style.css";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import ProductDetails from "./components/ProductDetailsPage/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact strict path="/" component={ProductsPage} />

        <Route exact strict path="/cart" component={CartPage} />

        <Route exact strict path="/checkout" component={CheckoutPage} />

        <Route exact strict path="/orderdetails" component={OrderPlaced} />

        <Route
          exact
          strict
          path="/Productdetails/:id"
          component={ProductDetails}
        />
      </Router>
    </div>
  );
}

export default App;
