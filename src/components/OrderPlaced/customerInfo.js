import React from "react";

function CustomerInfo(props) {
  const { items } = props;
  const itemKeys = Object.keys(items);
  return (
    <table className="final-customer-table">
      <tbody>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        {itemKeys.map(item => (
          <tr>
            <td>{item}</td>
            <td>{items[item]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerInfo;
