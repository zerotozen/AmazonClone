import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CurrencyFormat from "react-currency-format";
import { createStructuredSelector } from "reselect";

import {
  selectCartItemCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { setBuyState } from "../../redux/cart/cart.action";
import { selectBuyState } from "../../redux/cart/cart.selectors";

import {
  ComponentContainer,
  TextContainer,
  Input,
  Button,
} from "./subtotal.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Subtotal = ({
  itemCount,
  total,
  currentUser,
  history,
  buyNow,
  toggleBuyState,
}) => {
  const goCheckOut = (history) => {
    if (currentUser) {
      history.push("/address");
    } else {
      if (!buyNow) {
        setBuyState(true);
      }
      history.push("/login");
    }
  };
  return (
    <ComponentContainer>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemCount} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={Math.round(total).toFixed(2)} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      {itemCount ? (
        <>
          <TextContainer >
            <Input type="checkbox" />
            This order contains a gift
          </TextContainer>
          <Button onClick={() => goCheckOut(history)}>
            Proced to Checkout
          </Button>
        </>
      ) : (
        ""
      )}
    </ComponentContainer>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    itemCount: selectCartItemCount,
    total: selectCartTotal,
    currentUser: selectCurrentUser,
    buyNow: selectBuyState,
  });

const mapDispatchToProps = (dispatch) => ({
  setBuyState: (state) => dispatch(setBuyState(state)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Subtotal)
);
