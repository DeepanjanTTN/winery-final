import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { addProduct } from "../../Action/actions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoverCartTable from "../HoverCartTable/HoverCartTable";

export class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDetailRender: false
    };
  }

  cartDetailOnOver = event => {
    event.stopPropagation();
    this.setState({
      cartDetailRender: !this.state.cartDetailRender
    });
  };

  addItem = product => {
    console.log("clicked", product);
    this.props.addProduct(product);
    console.log("product added");
    this.notify();
  };

  notify = () => toast.success("Product added to cart");

  render() {
    let productDetails = this.props.productDetails;
    const { itemCount } = this.props;

    return (
      <div className="product-page clearfix">
        <ToastContainer />

        <div className="page-heading">
          <h2>Levi's Store</h2>
        </div>

        <div className="item-added">Product added to cart</div>

        <div
          className="cart-icon"
          onMouseEnter={this.cartDetailOnOver}
          onMouseLeave={this.cartDetailOnOver}
        >
          <Link to="/cart">
            <i className="fas fa-cart-arrow-down product-cart-icon" />
          </Link>
          {itemCount !== 0 ? this.state.cartDetailRender ? <HoverCartTable /> : null: null}
          <div className="cart-value">{itemCount}</div>
        </div>

        <div className="product-wrapper">
          {productDetails.map(item => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                units={item.units}
                addItem={this.addItem}
              />
            );
          })}
        </div>
        {/* <CartHover/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemCount: state.addToCart.addedItems.length,
    addProduct: state.addProduct,
    ...state.change_reducer
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: data => dispatch(addProduct(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
