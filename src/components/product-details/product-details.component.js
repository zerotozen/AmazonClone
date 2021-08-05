import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addItem, setBuyState } from "../../redux/cart/cart.action";

import { withRouter } from "react-router-dom";

import ReactImageMagnify from "react-image-magnify";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { Dimmer, Loader } from "semantic-ui-react";

import {
  ComponentContainer,
  ComponentSubcontainer,
  LeftSide,
  ImageContainer,
  RightSide,
  Title,
  Rating,
  FullDescriptionContainer,
  FullDescriptionList,
  PaymentContainer,
  PaymentSubcontainer,
  Price,
  DateContainer,
  StockTag,
  ButtonContainer,
  Button,
  LoaderContainer,
} from "./product-details.styles.";

const ProductDetails = ({ collection, history, addItem, currentUser }) => {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [path, setPath] = useState("");
  const fullDateNow = new Date().toDateString();
  const monthNow = fullDateNow.slice(0, 4);
  const dayNow = fullDateNow.slice(7, 10);

  useEffect(() => {
    obtainUrlData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const obtainUrlData = () => {
    setPath(getPath());
    setIndex(getIndex());
  };

  const getPath = () => {
    return history.location.pathname.split("/")[1];
  };

  const getIndex = () => {
    const urlPath = history.location.pathname;
    const urlPathId = Number(urlPath.split("/")[2]);

    for (let i = 0; i < collection.length; i++) {
      if (collection[i].linkUrl === `/${urlPathId}`) {
        return i;
      }
    }
  };

  const getRandomNumber = (dayNow) => {
    return Math.floor(
      Math.random() * (Number(dayNow) + 5 - Number(dayNow)) + Number(dayNow)
    );
  };

  const checkIfLogin = () => {
    if (currentUser) {
      addItem(collection[index]);
      history.push("/checkout");
    } else {
      setBuyState(true);
      history.push("/login");
    }
  };

  const {
    imageUrl,
    zoomImage,
    descriptionTitle,
    fullDescription,
    price,
    rating,
  } = collection[index];

  if (!collection)
    return (
      <LoaderContainer>
        <Dimmer active inverted size="massive">
          <Loader inverted>
            {/* {conexion ? "Loading" : "Please, Check your conexion"} */}
            loading
          </Loader>
        </Dimmer>
      </LoaderContainer>
    );

  return (
    <ComponentContainer>
      <ComponentSubcontainer>
        <LeftSide>
          <ImageContainer>
            {
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    isFluidWidth: true,
                    src: imageUrl,
                    imageClassName: "reviewProduct__imageContainer",
                  },
                  largeImage: {
                    src: zoomImage,
                    width: 1200,
                    height: 1800,
                  },
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "200%",
                  },
                }}
              />
            }
          </ImageContainer>
        </LeftSide>

        <RightSide>
          <Title>{descriptionTitle}</Title>
          <Rating>
            {" "}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </Rating>
          <hr />
          <FullDescriptionContainer>
            {fullDescription
              ? fullDescription.map((paragrah) => {
                  return (
                    <ul>
                      <FullDescriptionList>{paragrah}</FullDescriptionList>
                    </ul>
                  );
                })
              : ""}
          </FullDescriptionContainer>
        </RightSide>

        <PaymentContainer>
          <PaymentSubcontainer>
            <Price>{price}€</Price>
            <DateContainer>
              Arrives:
              <strong>
                {monthNow}
                {dayNow} - {getRandomNumber(dayNow)}
              </strong>
            </DateContainer>

            <StockTag>In stock</StockTag>
            <span>Order it now</span>

            <ButtonContainer>
              <Button onClick={() => addItem(collection[index])}>
                Add to Cart
              </Button>
              <Button onClick={() => checkIfLogin(currentUser)} amazonColor>
                Buy Now
              </Button>
            </ButtonContainer>
          </PaymentSubcontainer>
        </PaymentContainer>
      </ComponentSubcontainer>
    </ComponentContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  setBuyState: (state) => dispatch(setBuyState(state)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
