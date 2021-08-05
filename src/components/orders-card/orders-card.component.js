import React from "react";

import {
  ComponentContainer,
  LeftSide,
  RightSide,
  Quantity,
  Price,
  Img,
} from "./orders-card.styles";

const OrdersCard = ({ descriptionTitle, imageUrl, price, quantity }) => {
  return (
    <ComponentContainer>
      <LeftSide>
        <strong>Description</strong>
        <div>{descriptionTitle}</div>
        <Img alt="" src={imageUrl}></Img>
      </LeftSide>
      <RightSide>
        <div>
          <Quantity>Quantity</Quantity>
          <div>{quantity}</div>
        </div>
        <div>
          <Price>Price</Price>
          <div>{price}</div>
        </div>
      </RightSide>
    </ComponentContainer>
  );
};

export default OrdersCard;
