const initialState = {
  total: 0
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let total = state.total + action.data.price;
      return {
        ...state,
        total
      };
    }
    case "ADD_QUANTITY": {
      console.log("inside total reducer add quantity");
      let total = state.total + action.data.price;
      return {
        ...state,
        total
      };
    }

    case "SUB_QUANTITY":
      {
        let total;
        if (action.data.quantity > 1) {
          total = state.total - action.data.price;
          return {
            ...state,
            total
          };
        } else if (action.data.quantity <= 1) {
          return {
            ...state
          };
        }
      }

      break;

    case "DELETE_ITEM": {
      let total = state.total - (action.data.price * action.data.quantity);
      return {
        ...state,
        total
      };
    }
    case "EMPTY_CART":{
      return {
        ...state,
        total:0,
      }
    }
    default: {
      return state;
    }
  }
};
export default totalReducer;
