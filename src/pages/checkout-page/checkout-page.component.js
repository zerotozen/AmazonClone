import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Subtotal from "../../components/subtotal/subtotal.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import alexwong_banner from "../../assets/alexwong_banner.png";

import {
  PageContainer,
  LeftSide,
  RightSide,
  CardContainer,
  Ad,
  TitleContainer,
  Title,
  Price,
} from "./checkout-page.styles";

function CheckoutPage({ cartItems, history, match }) {
  return (
    <PageContainer >
      <div>
        <a href="https://alwportfolio.netlify.app/">
          <Ad src={alexwong_banner} alt="" />
        </a>

        <>
          <CardContainer >
            <TitleContainer >
              <LeftSide >
                <Title >Shopping Cart</Title>
              </LeftSide>

              <RightSide >
                <Price>Price</Price>
              </RightSide>
            </TitleContainer>

            {cartItems.map((item) => {
              return (
                <CheckoutItem
                  key={item.id}
                  cartItem={item}
                  history={history}
                  match={match}
                />
              );
            })}
          </CardContainer>
        </>
      </div>
      <div>
        <Subtotal />
      </div>
    </PageContainer>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
