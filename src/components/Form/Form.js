import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <form className="checkout-form">
          <label className="formdetail">Name</label>
          <input type="text" name="fullName" />
          <label className="formdetail">Email</label>
          <input type="email" name="email" />
          <label className="formdetail">City</label>
          <input type="text" name="city" />
          <label className="formdetail">Address</label>
          <input type="text" name="address" />
          <label className="formdetail">ZipCode</label>
          <input type="number" name="zipcode" />
          <label className="formdetail">Country</label>
          <select name="country">
            <option>India</option>
            <option>US</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
