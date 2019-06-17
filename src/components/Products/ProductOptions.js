import React, { Component } from "react";
import SelectSize from "./../Select/SelectSize";
import SelectColor from "./../Select/SelectColor";
import { productColor } from "../itemConfig";

export class ProductOptions extends Component {
  constructor(props) {
    super(props);
    let { color } = productColor.find(item => item.img === props.img);
    this.state = {
      size: "Small",
      color
    };
  }

  handleSizeChange = e => {
    this.setState({
      size: e.target.value
    });
  };
  handleColorChange = color => {
    this.setState({
      color
    });
  };

  render() {
    let { id, name, units, count, addItem, price, img } = this.props;

    return (
      <div className="options-container clearfix">
        <div className="color-selector">
          <SelectColor handleOnColorChange={this.handleColorChange} id={id} />
        </div>
        <SelectSize handleOnChange={this.handleSizeChange} />
        <button
          className="addtocart-btn"
          onClick={() =>
            addItem({
              id,
              img,      
              name,
              units,
              count,
              price,
              size: this.state.size,
              color: this.state.color
            })
          }
        >
          <span className="cart-btn-text">ADD TO CART</span>
          <i className="fas fa-check" />
        </button>
      </div>
    );
  }
}

export default ProductOptions;
