import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTable from "./orderTable";
export class OrderDetails extends Component {
  render() {
    return (
      <div className="order-details">
        <h4>Order Details</h4>
        <table className="order-details-table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
            </tr>

            {this.props.cartItems.map(item => (
              <OrderTable key={this.props.id} orderitem={item} />
            ))}
          </tbody>
        </table>

        <div className="final-order">
          <p>
            Total: <span> {this.props.total + 40}</span>
          </p>

          <p>
            GST (5%):
            <span> Rs. {this.props.total * 0.05}</span>
          </p>
          <p>
            Order Total:
            <span> Rs. {this.props.total + this.props.total * 0.05 + 40}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addToCart.addedItems,
    total: state.totalReducer.total
  };
};

export default connect(
  mapStateToProps,
  null
)(OrderDetails);
