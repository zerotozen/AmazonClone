import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";

import {
  ComponentContainer,
  Title,
  Price,
  ComponentSubcontainer,
  Img,
  ArrowsContainer,
  Arrow,
  Quantity,
  Button,
} from "./checkout-payment.styles";

const CheckOutPaymentItem = ({ cartItem, addItem, clearItem, removeItem }) => {
  const { imageUrl, descriptionTitle, price, quantity } = cartItem;
  return (
    <div>
      <ComponentContainer>
        <Title>{descriptionTitle}</Title>
        <Price>{price}€</Price>
        <ComponentSubcontainer>
          <Img alt="" src={imageUrl}></Img>
          <ArrowsContainer>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Quantity>{quantity}</Quantity>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
          </ArrowsContainer>
          <Button onClick={() => clearItem(cartItem)}>Clear Item</Button>
        </ComponentSubcontainer>
      </ComponentContainer>
    </div>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapToDispatchToProps)(CheckOutPaymentItem);
