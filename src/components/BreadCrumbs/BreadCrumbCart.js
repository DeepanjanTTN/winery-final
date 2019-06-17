import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumbCart extends Component {
  render() {
    return (
      <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
      </React.Fragment>
    );
  }
}

export default BreadCrumbCart;
