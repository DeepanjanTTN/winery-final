import React, { Component } from "react";
import { productColor } from "./../itemConfig";
import { connect } from "react-redux";
import changeTshirt from "./select-action";
import "./../../scss/style.css";

export class SelectColor extends Component {
  changeColor = fieldvalue => {
    const { changeTshirt, id, handleOnColorChange } = this.props;
    var changeImage;

    switch (fieldvalue) {
      case 1:
        changeImage = {
          img: productColor[0].img,
          id: id
        };
        handleOnColorChange(productColor[0].color);
        changeTshirt(changeImage);
        break;

      case 2:
        changeImage = { color: "blue", img: productColor[1].img, id: id };
        handleOnColorChange(productColor[1].color);
        changeTshirt(changeImage);
        break;

      case 3:
        changeImage = {
          img: productColor[2].img,
          id: id
        };
        handleOnColorChange(productColor[2].color);
        changeTshirt(changeImage);
        break;

      default:
        changeImage = {
          img: productColor[0].img,
          id: id
        };
        changeTshirt(changeImage);
        break;
    }
  };

  render() {
    return (
      <div className="list-wrapper">
        <ul className="items">
          <li>
            <div
              className="blue-option"
              value={productColor[0].colorId}
              onClick={() => this.changeColor(1)}
            />
          </li>
          <li>
            <div
              className="red-option"
              value={productColor[1].colorId}
              onClick={() => this.changeColor(2)}
            />
          </li>
          <li>
            <div
              className="yellow-option"
              value={productColor[2].colorId}
              onClick={() => this.changeColor(3)}
            />
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeTshirt
};
export default connect(
  null,
  mapDispatchToProps
)(SelectColor);
