import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuantity, subQuantity, deleteItem } from "../../Action/actions";

export class CartTable extends Component {
  render() {
    const {
      id,
      img,
      name,
      price,
      quantity,
      addQuantity,
      subQuantity,
      showOptions,
      deleteItem,
      size,
      color
    } = this.props;
    return (
      <tr className="cart-table-entries">
        <td><img className="cart-image" src={img} alt="img pic" /></td>
        <td>{name}</td>
        <td>{size}</td>
        <td>{color}</td>
        <td>
          {showOptions ? (
            <i
              onClick={() => subQuantity({ id, price, quantity })}
              className="icon fas fa-minus"
            />
          ) : null}
          {quantity}
          {showOptions ? (
            <i
              onClick={() => addQuantity({ id, price })}
              className="icon fas fa-plus"
            />
          ) : null}
        </td>
        <td className="">{price * quantity}</td>

        {showOptions ? (
          <td>
            <button
              onClick={() => deleteItem({ id, price, quantity})}
              className="delete-icon"
            >
              <i className="fas fa-times" />
            </button>
          </td>
        ) : null}
      </tr>
    );
  }
}

const mapDispatchToProps = {
  addQuantity,
  subQuantity,
  deleteItem
};
export default connect(
  null,
  mapDispatchToProps
)(CartTable);
