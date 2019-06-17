import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerInfo from "./customerInfo";
import OrderTable from "./orderTable";
import BreadCrumb from "../BreadCrumbs/BreadCrumbOrderDetails";

export class OrderPlaced extends Component {
  continueShopping = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    const { billingData } = this.props;
    const actualBillingObject = billingData[0];

    return (
      <div className="final-order-page">
        <div className="page-heading">
          <h2>Summary Page</h2>
        </div>

        <div className="final-order-div">
          <BreadCrumb />
          <h3>Your Order</h3>
          <OrderTable products={this.props.cartItems} />
          <h3>Customer Details </h3>
          <CustomerInfo items={actualBillingObject} />
          <button className="cart-buttons" onClick={this.continueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addToCart.addedItems,
    billingData: state.billingData
  };
};

export default connect(
  mapStateToProps,
  ""
)(OrderPlaced);
