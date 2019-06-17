import React, { Component } from "react";
import { connect } from "react-redux";
import HoverCartTableItems from "./HoverCartTableItems";

export class HoverCartTable extends Component {
  render() {
    const { cartItems } = this.props;
    console.log("printing cart items", cartItems);
    return (
      <table className="hover-table">
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>SIZE</th>
            <th>COLOR</th>
          </tr>
          {cartItems.map(item => (
            <HoverCartTableItems key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.addToCart.addedItems
});
export default connect(mapStateToProps)(HoverCartTable);
