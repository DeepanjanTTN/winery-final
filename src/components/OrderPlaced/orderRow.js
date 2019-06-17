import React from "react";

function OrderRow(props) {
  const { id, name, price, quantity } = props.item;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
}
export default OrderRow;
