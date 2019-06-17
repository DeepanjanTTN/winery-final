import React from "react";

function OrderTable(props) {
  console.log("props in order table", props);
  const { name, size, color, price } = props.orderitem;

  return (
    <tr>
      <td className="table-details">{name}</td>
      <td className="table-details">{size}</td>
      <td className="table-details">{color}</td>
      <td className="table-details"> Rs. {price}</td>
    </tr>
  );
}

export default OrderTable;
