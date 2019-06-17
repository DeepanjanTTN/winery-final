import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumbCheckout extends Component {
  render() {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li class="breadcrumb-item"><a href="#">Library</a></li> */}
            <li className="breadcrumb-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </nav>
      </React.Fragment>
    );
  }
}

export default BreadCrumbCheckout;
