import React from "react";

import moment from "moment";
import OrdersCard from "../orders-card/orders-card.component";
import CurrencyFormat from "react-currency-format";

import { ComponentContainer, OrderId, Total } from "./order.styles";

function Order({ order }) {
  return (
    <ComponentContainer>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <OrderId>
        <small>{order.id}</small>
      </OrderId>
      {order.data.cartItems?.map((item) => (
        <OrdersCard
          id={item.id}
          descriptionTitle={item.descriptionTitle}
          imageUrl={item.imageUrl}
          price={item.price}
          rating={item.rating}
          cartItem={item.cartItem}
          quantity={item.quantity}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <Total>Order Total: {value}</Total>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
    </ComponentContainer>
  );
}

export default Order;
