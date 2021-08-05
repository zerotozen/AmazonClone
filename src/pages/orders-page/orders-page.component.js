import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { db } from "../../firebase/firebase";

import Order from "../../components/order/order.component";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { ComponentContainer, OrdersContainer } from "./orders-page.styles";

function OrderPage({ curretUser, cartItems }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (curretUser) {
      db.collection("users")
        .doc(curretUser?.id)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [curretUser]);
  return (
    <ComponentContainer >
      <h1>Your Orders</h1>

      <OrdersContainer >
        {orders?.map((order) => (
          <Order order={order} cartItems={cartItems} />
        ))}
      </OrdersContainer>
    </ComponentContainer>
  );
}

const mapStateToProps = () =>
  createStructuredSelector({
    curretUser: selectCurrentUser,
    cartItems: selectCartItems,
  });

export default connect(mapStateToProps)(OrderPage);
