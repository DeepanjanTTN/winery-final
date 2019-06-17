const   productColor = [
  {
    colorId: 1,
    color: "Blue",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg"
  },

  {
    colorId: 2,
    color: "Red",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg"
  },

  {
    colorId: 3,
    color: "Yellow",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg"
  }
];

const productDetails = [
  {
    id: 401,
    name: "Signature",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg",
    units: 1,
    price: 900
  },

  {
    id: 402,
    name: "Reebok",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
    units: 1,
    price: 700
  },

  {
    id: 403,
    name: "Lee",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg",
    units: 1,
    price: 1700
  },

  {
    id: 404,
    name: "Addidas",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
    units: 1,
    price: 1500
  },

  {
    id: 405,
    name: "Puma",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg",
    units: 1,
    price: 1000
  },

  {
    id: 406,
    name: "Levi's",
    img: "https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg",
    units: 1,
    price: 1200
  }
];

const buttonLabels = [
  "Update Cart",
  "Empty Cart",
  "Continue Shopping",
  "Go To Checkout"
];

const addedItems = [];
let total = 0;

export { productColor, productDetails, buttonLabels, addedItems, total };
