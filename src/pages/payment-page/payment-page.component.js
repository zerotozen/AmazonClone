import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.action";

import Popup from "../../components/popup/popup.component";
import HeaderImage1 from "../../assets/address-page-heade1.png";
import CheckOutPaymentItem from "../../components/checkout-payment-item/checkout-payment-item.component";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../axios/axios";

import {
  selectCartItems,
  selectCartTotal,
  selectCartItemCount,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { createStructuredSelector } from "reselect";

import { db } from "../../firebase/firebase";

import {
  ComponentContainer,
  ComponentSubcontainer,
  LeftSide,
  RightSide,
  Header,
  Img,
  Title,
  NameContainer,
  Input,
  Button,
  CartItemsContainer,
  SubtotalContainer,
  CardElementContainer,
} from "./payment-page.styles";

const PaymentPage = ({
  history,
  match,
  clearCart,
  currentUser,
  total,
  cartItems,
  itemCount,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [processing, setProcessing] = useState("");
  // eslint-disable-next-line
  const [succeeded, setSucceeded] = useState(false);
  // eslint-disable-next-line
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [popup, setPopup] = useState(false);
  const { register, handleSubmit } = useForm();

  const [dataForm, setDataForm] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [total]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const onFormSubmit = async (data) => {
    setDataForm(data);
    setProcessing(true);
    // eslint-disable-next-line
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(currentUser?.id)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cartItems: [
              {
                id: cartItems[0].id,
                descriptionTitle: cartItems[0].descriptionTitle,
                imageUrl: cartItems[0].imageUrl,
                price: cartItems[0].price,
                quantity: cartItems[0].quantity,
                rating: cartItems[0].rating,
              },
            ],
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        clearCart();
      });

    setPopup(true);
    setTimeout(() => {
      setPopup(false);
      history.replace("/orders");
    }, 3000);
  };

  const onErrors = (errors) => alert("Complete the form");

  const iframeStyles = {
    base: {
      color: "#000000",

      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };
  return (
    <ComponentContainer>
      <ComponentSubcontainer>
        <LeftSide>
          <div>
            <Header>
              <Img
                onClick={() => history.push("/")}
                alt=""
                src={HeaderImage1}
              ></Img>
              <Title>Select payment method</Title>
            </Header>
            <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
              <NameContainer>
                <span>Full Name</span>
                <Input
                  {...register("cardName", { required: true })}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                  name="cardName"
                ></Input>
              </NameContainer>
              <div>
                <span>Card Information</span>
                <CardElementContainer>
                  <CardElement options={cardElementOpts} />
                </CardElementContainer>
              </div>

              <Button type="submit" value="Submit Form">
                Place order
              </Button>
              <Popup trigger={popup} setTrigger={setPopup} />
            </form>
          </div>
        </LeftSide>
        <RightSide>
          <CartItemsContainer>
            {cartItems.map((item) => {
              return (
                <CheckOutPaymentItem
                  key={item.id}
                  cartItem={item}
                  history={history}
                  match={match}
                />
              );
            })}
          </CartItemsContainer>
          <SubtotalContainer>
            {`Subtotal: (${itemCount} items): ${Math.round(total).toFixed(
              2
            )} €`}
          </SubtotalContainer>
        </RightSide>
      </ComponentSubcontainer>
    </ComponentContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    itemCount: selectCartItemCount,
    total: selectCartTotal,
    cartItems: selectCartItems,
  });

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentPage)
);
