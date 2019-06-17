import React, { Component } from "react";

export default class HoverCartTableItems extends Component {
  render() {
    const { name, size, color } = this.props.item;

    return (
      <tr>
        <td> {name} </td>
        <td> {size} </td>
        <td> {color} </td>
      </tr>
    );
  }
}
