import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import {
  ComponentContainer,
  ImageContainer,
  AmazonChoice,
  BestSeller,
  Orange,
  Image,
  Title,
  Rating,
  PriceContainer,
  Price,
  Symbol,
} from "./collection-item.styles";

const CollectionItem = ({ history, match, item, addItem }) => {
  const {
    linkUrl,
    imageUrl,
    descriptionTitle,
    rating,
    price,
    amazonChoice,
    bestSeller,
  } = item;
  return (
    <ComponentContainer>
      {amazonChoice ? (
        <AmazonChoice>
          Amazon`s <Orange>Choice</Orange>
        </AmazonChoice>
      ) : bestSeller ? (
        <BestSeller>Best Seller</BestSeller>
      ) : (
        ""
      )}
      <ImageContainer>
        <Image
          onClick={() => history.push(`${match.url}${linkUrl}`)}
          src={imageUrl}
          alt=""
        />
      </ImageContainer>
      <Title>{descriptionTitle}</Title>
      <Rating>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </Rating>
      <PriceContainer>
        <Price>{price}</Price>
        <Symbol>€</Symbol>
      </PriceContainer>
      {/* <ButtonContainer>
        <CustomButton collectionButton onClick={() => addItem(item)}>
          Add to Cart
        </CustomButton>
      </ButtonContainer> */}
    </ComponentContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
