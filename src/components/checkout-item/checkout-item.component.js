import React from "react";

import { connect } from "react-redux";

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";

import {
  ComponentContainer,
  LeftSide,
  RightSide,
  Image,
  Info,
  Title,
  Price,
  Small,
  Strong,
  Quantity,
  Arrow,
  Value,
  Button,
} from "./checkout-item.styles";

const CheckoutItem = ({
  id,
  cartItem,
  hideButton,
  clearItem,
  addItem,
  removeItem,
}) => {
  const { imageUrl, price, quantity, descriptionTitle } = cartItem;
  return (
    <ComponentContainer className="checkoutProduct">
      <LeftSide>
        <Image src={imageUrl} alt="" />
        <Info >
          <Title >{descriptionTitle}</Title>
          <Quantity >
            <Arrow  onClick={() => removeItem(cartItem)}>
              &#10094;
            </Arrow>
            <Value >{quantity}</Value>
            <Arrow onClick={() => addItem(cartItem)}>
              &#10095;
            </Arrow>
            {!hideButton && (
              <Button onClick={() => clearItem(cartItem)}>
                Remove from Basket
              </Button>
            )}
          </Quantity>
        </Info>
      </LeftSide>

      <RightSide>
        <Price >
          <>
            <Strong>{price}</Strong>
            <Small>€</Small>
          </>
        </Price>
      </RightSide>
    </ComponentContainer>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapToDispatchToProps)(CheckoutItem);
