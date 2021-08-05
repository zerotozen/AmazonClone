import AddressActionTypes from "./addres.types";

const INITIAL_STATE = {
  address: null,
};

const addressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddressActionTypes.ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case AddressActionTypes.REMOVE__ADDRESS:
      return {
        ...state,
        address: null,
      };

    default:
      return state;
  }
};

export default addressReducer;
