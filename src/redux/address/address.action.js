import AddressActionTypes from "./addres.types";

export const addAddress = (address) => ({
  type: AddressActionTypes.ADD_ADDRESS,
  payload: address,
});

export const removeAddress = (address) => ({
  type: AddressActionTypes.REMOVE__ADDRESS,
  payload: address,
});
