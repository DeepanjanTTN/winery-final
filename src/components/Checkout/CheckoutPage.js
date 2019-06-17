import React, { Component } from "react";
import CheckoutTable from "./../CheckoutTable/CheckoutTable";
import { connect } from "react-redux";
import OrderDetails from "./OrderDetails";
import { billingData } from "../../Action/actions";
import BreadCrumb from "../BreadCrumbs/BreadCrumbCheckout";
import * as yup from "yup"; // for everything form Validation
import Form from "../Form/Form";

export class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      Email: "",
      City: "",
      Address: "",
      Zipcode: "",
      Country: "India",
      shippingFullName:'',
      shippingEmail:'',
      shippingCity:'',
      shippingAddress:'',
      shippingZipCode:'',
      shippingCountry:'',
      isbillingAddressSame:false,
      
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === "Email") {
      if (e.target.name === "City") {
        if (e.target.value === "") {
          this.setState({
            CityError: true
          });
        } else {
          this.setState({
            CityError: false
          });
        }
      }

      if (e.target.name === "Address") {
        if (e.target.value === "") {
          this.setState({
            AddressError: true
          });
        } else {
          this.setState({
            AddressError: false
          });
        }
      }

      if (e.target.name === "Zipcode") {
        if (e.target.value.length > 6) {
          this.setState({
            ZipcodeError: true
          });
        } else {
          this.setState({
            ZipcodeError: false
          });
        }
      }
    }
  };
  handleBillingCheckbox = (e) =>{
    this.setState({isbillingAddressSame:!this.state.isbillingAddressSame})
    if(!this.state.isbillingAddressSame){
    this.setState({
      shippingFullName:this.state.FullName,
      shippingEmail: this.state.Email,
      shippingCity: this.state.City,
      shippingAddress: this.state.Address,
      shippingZipCode:this.state.Zipcode,
      shippingCountry:this.state.Country,
        })
      }
      else{
        this.setState({
          shippingFullName:'',
          shippingEmail: '',
          shippingCity: '',
          shippingAddress: '',
          shippingZipCode:'',
          shippingCountry:'',

            });
          }

      }
  

  validateForm = () => {
    let schema = yup.object().shape({
      FullName: yup.string().required(),
      Email: yup
        .string()
        .email()
        .required(),
      City: yup.string().required(),
      Address: yup.string().required(),
      Zipcode: yup
        .number()
        .min(6)
        .required()
    });
    schema
      .validate(this.state)
      .then(valid => {
        console.log("valid form", valid);
        const { history } = this.props;
        this.props.billingData({
          ...this.state
        });
        history.push("/orderdetails");
      })
      .catch(err => {
        alert(err.errors);
        console.log("err are", err.errors);
        return false;
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("HandleSubmit Called", this.state);
    this.validateForm();
  };

  render() {
    const { cartItems, total } = this.props;
    const { FullName, Email, City, Address, Zipcode, Country } = this.state;
    return (
      <>
        <div className="page-heading">
          <h2>Checkout</h2>
        </div>
        <section className="checkout-page-wrapper">
          <BreadCrumb />

          <div className="checkout-page">
            <table className="checkout-table">
              <tbody>
                <tr>
                  <th>IMAGE</th>
                  <th>ITEM</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                </tr>

                {cartItems.map(item => (
                  <CheckoutTable
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                  />
                ))}
              </tbody>
            </table>
            <div className="cart-total">
              <p>
                Shipping : <span> Rs. {40} </span>
              </p>
              <p>
                Total :<span> Rs. {parseInt(total) + 40}</span>
              </p>
            </div>

            <div className="order-container">
              <div className="form-div">
                {/* <Form /> */}

                <form
                  className="checkout-form"
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <label className="formdetail">Name</label>
                  <input
                    type="text"
                    name="FullName"
                    value={FullName}
                    onChange={this.handleChange}
                  />
                  {this.state.nameError ? (
                    <p className="error-text">Field cannot be left blank</p>
                  ) : (
                    ""
                  )}
                  <label className="formdetail">Email</label>
                  <input
                    type="email"
                    name="Email"
                    value={Email}
                    onChange={this.handleChange}
                  />
                  {this.state.EmailError ? (
                    <p className="error-text">
                      Please enter a valid Email Address
                    </p>
                  ) : (
                    ""
                  )}
                  <label className="formdetail">City</label>
                  <input
                    type="text"
                    name="City"
                    value={City}
                    onChange={this.handleChange}
                  />
                  {this.state.CityError ? (
                    <p className="error-text">Please enter your City</p>
                  ) : (
                    ""
                  )}
                  <label className="formdetail">Address</label>
                  <input
                    type="text"
                    name="Address"
                    value={Address}
                    onChange={this.handleChange}
                  />
                  {this.state.AddressError ? (
                    <p className="error-text">Please enter your Address</p>
                  ) : (
                    ""
                  )}
                  <label className="formdetail">Zipcode</label>
                  <input
                    type="number"
                    name="Zipcode"
                    value={Zipcode}
                    onChange={this.handleChange}
                  />
                  {this.state.ZipcodeError ? (
                    <p className="error-text">Please enter a valid Zipcode</p>
                  ) : (
                    ""
                  )}
                  <label className="formdetail">Country</label>
                  <select
                    name="Country"
                    value={Country}
                    onChange={this.handleChange}
                  >
                    <option>India</option>
                    <option>US</option>
                  </select>

                  <button type="submit" className="cart-buttons">
                    Place Order
                  </button>
                </form>

                <div className="same-billing-checkbox" >
                  <label>Same as Billing</label>
                  <input className="billing-checkbox-tick" type="checkbox"  onChange={this.handleBillingCheckbox}/>
                </div>
                <div>
                <label className="formdetail">Name</label>

                  <input type="text" name="shippingFullName" disabled={this.state.isbillingAddressSame}value={this.state.shippingFullName} onChange={this.handleChange} />
                  <label className="formdetail">Email</label>
                  <input type="email" name="shippingEmail" disabled={this.state.isbillingAddressSame}value={this.state.shippingEmail} />
                   <label className="formdetail">City</label>
                   <input type="text" name="shippingCity" disabled={this.state.isbillingAddressSame}value={this.state.shippingCity}  onChange={this.handleChange}/>
                    <label className="formdetail">Address</label>
                    <input type="text" onChange={this.handleChange} disabled={this.state.isbillingAddressSame}value={this.state.shippingAddress} name="shippingAddress" />
                    <label className="formdetail" >ZipCode</label>
                      <input type="number" name="zipcode" onChange={this.handleChange} disabled={this.state.isbillingAddressSame}value={this.state.shippingZipCode} />
                </div>

              </div>
              <div>
                <OrderDetails />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.addToCart.addedItems,
    total: state.totalReducer.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    billingData: data => dispatch(billingData(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
