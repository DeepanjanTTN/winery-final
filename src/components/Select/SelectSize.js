import React, { Component } from "react";
import "./../../scss/style.css";

export class SelectSize extends Component {
  render() {
    const { handleOnChange } = this.props;
    return (
      <div>
        <select onChange={e => handleOnChange(e)} className="select-size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
    );
  }
}

export default SelectSize;
