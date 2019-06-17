import React, { Component } from "react";
import CartTable from "./../CartTable/CartTable";
import { connect } from "react-redux";
import { emptyCart, deleteItem } from "./../../Action/actions";
import { Link } from "react-router-dom";
import emptyCartImage from "./../../images/emptyCartImage.png";
import BreadCrumb from "../BreadCrumbs/BreadCrumbCart";

export class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }

  handleUpdateCart = () => {
    this.setState({
      showOptions: !this.state.showOptions
    });
  };
  emptyCart = event => {
    event.preventDefault();
    this.props.emptyCart();
  };

  continueShopping = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  deleteItem = (event, id) => {
    event.preventDefault();
    this.props.deleteItem();
  };

  render() {
    const { cartItems, cartItemLength } = this.props;
    return (
      <>
        {/* {console.log(cartItems)} */}

        <div className="page-heading">
          <h2>Your Shopping Cart</h2>
        </div>
        <section className="cart-page-wrapper">
          <BreadCrumb />

          {cartItemLength === 0 ? (
            <div className="no-stuff-added">
              {/* <h1>Please add your favourite Stuff !!</h1> */}
              <img className="empty-cart-image" src={emptyCartImage} alt="Empty Cart" />
              <button className="back-to-shop" onClick={this.continueShopping}>
                <i className="fas fa-long-arrow-alt-left continue-arrow" />
                <span>Continue Shopping</span>
              </button>
            </div>
          ) : (
            <div>
              <table className="cart-table">
                <tbody>
                  <tr>
                    <th>IMAGE</th>
                    <th>ITEM</th>
                    <th>SIZE</th>
                    <th>COLOR</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    {this.state.showOptions ? <th>DEL</th> : null}
                  </tr>
                  {cartItems.map(item => (
                    <CartTable
                      key={item.id}
                      img={item.img}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      showOptions={this.state.showOptions}
                      size={item.size}
                      color={item.color}
                    />
                  ))}
                </tbody>
              </table>
              <div className="buttons-div">
                <button
                  className="cart-buttons"
                  onClick={this.handleUpdateCart}
                >
                  Update Cart
                </button>
                <button className="cart-buttons" onClick={this.emptyCart}>
                  Empty Cart
                </button>
                <button
                  className="cart-buttons"
                  onClick={this.continueShopping}
                >
                  Continue Shopping
                </button>
                <Link to="/checkout">
                  <button className="cart-buttons">Go to Checkout</button>
                </Link>
              </div>
            </div>
          )}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addToCart.addedItems,
    cartItemLength: state.addToCart.addedItems.length
  };
};

const mapDispatchToProps = dispatch => ({
  emptyCart: data => dispatch(emptyCart(data)),
  deleteItem: data => dispatch(deleteItem(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
