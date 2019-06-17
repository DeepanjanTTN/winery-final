import React, { Component } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../BreadCrumbs/BreadCrumbProduct";
import { Link } from "react-router-dom";
import HoverCartTable from "../HoverCartTable/HoverCartTable";

class ProductDetails extends Component {
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

  render() {
    const { match, products, itemCount } = this.props;
    const urlId = parseInt(match.params.id);
    const product = products.find(item => item.id === urlId);
    const { name, price, img } = product;
    console.log("urlid and product", urlId, products);

    return (
      <div>
        <div className="page-heading">
          <h2>Product Details</h2>
        </div>

        <div
          className="cart-icon"
          onMouseEnter={this.cartDetailOnOver}
          onMouseLeave={this.cartDetailOnOver}
        >
          <Link to="/cart">
            <i className="fas fa-cart-arrow-down product-cart-icon" />
          </Link>
          {itemCount !== 0 ? (
            this.state.cartDetailRender ? (
              <HoverCartTable />
            ) : null
          ) : null}

          <div className="cart-value">{itemCount}</div>
        </div>

        <section className="product-details-page">
          <BreadCrumb />

          <div className="product-details">
            <div>
              <img className="product-image" src={img} alt="Tshirt" />

              <p className="product-description">
                Detailed to look like a real <span>NBA</span> jersey, sized for
                a youth and priced to make you cheer! This quality{" "}
                <span>NBA</span> Adidas Replica Jersey features screen printed
                team graphic, screen printed player name and number on the front
                and back, tagless collar, and embroidered Adidas and{" "}
                <span>NBA</span> logo's on the front. Perfect for your child or
                for gift giving. Made of breathable, easy-care 100% polyester
                with Climate Cool fabrication. Officially licensed by the{" "}
                <span>NBA</span>. Perfect for your child or for gift giving.
                Made of breathable, easy-care 100% polyester with Climate Cool
                fabrication. Officially licensed by the <span>NBA</span>.
              </p>
            </div>

            <div className="selection-panel">
              <ul className="items color-selection">
                <li>
                  <div className="blue-option" />
                </li>
                <li>
                  <div className="red-option" />
                </li>
                <li>
                  <div className="yellow-option" />
                </li>
              </ul>

              <select className="select-size size-selection">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <button className="cart-buttons">ADD TO CART</button>
            </div>
          </div>

          <h2 className="product-brand-name"> Brand - {name}</h2>

          <h3 className="product-costing">
            {" "}
            Best Price <span className="pricing">Rs. {price}</span>
          </h3>

          <h3 className="offers-panel">
            Limited Stock ! Your Special Price{" "}
            <span className="customer-price">Rs. {price - 200}</span>
          </h3>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.addToCart.productDetails,
  itemCount: state.addToCart.addedItems.length
});
export default connect(
  mapStateToProps,
  null
)(ProductDetails);
