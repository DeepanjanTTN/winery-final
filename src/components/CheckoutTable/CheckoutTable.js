import React, { Component } from "react";

export class CheckoutTable extends Component {
  render() {
    const { name, price, quantity,img } = this.props;
    return (
      <tr>
        <td><img className="cart-image" src={img} alt="img pic" /></td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default CheckoutTable;
