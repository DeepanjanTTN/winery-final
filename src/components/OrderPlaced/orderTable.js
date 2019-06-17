import React from "react";
import OrderRow from "./orderRow";

function OrderTable(props) {
  const { products } = props;

  return (
    <table className="final-order-table">
    <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      {products.map(item => (
        <OrderRow item={item} />
      ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
