import React, { Component } from "react";
import ProductOptions from "./ProductOptions";
import { Link } from "react-router-dom";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      quantity: 0,
      selectSize: "Small"
    };
  }

  handleOnMouseOver = e => {
    this.setState({
      showOptions: true
    });
  };
  handleOnMouseLeave = e => {
    this.setState({
      showOptions: false
    });
  };

  render() {
    const { id, name, price, img } = this.props;
    return (
      <div
        id={id}
        className="product-container"
        onMouseEnter={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div className="product-display">
          <Link to={`/Productdetails/${id}`}>
            <div className="img-container" id="img-container">
              <img className="product-img" src={img} alt={name} />
            </div>
          </Link>

          {this.state.showOptions ? (
            <ProductOptions className="product-options" {...this.props} />
          ) : null}

          {/* <ProductOptions/>  */}
        </div>

        <div className="product-detail">
          <span className="product-name">{name}</span>
          <span className="product-price">Rs {price}</span>
        </div>
      </div>
    );
  }
}

export default Product;
