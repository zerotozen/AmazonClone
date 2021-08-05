import React from "react";

import { withRouter } from "react-router";

import { CardContainer, Image } from "./carousel-card.styles";

const CarouselCard = ({ item, history, match, url }) => {
  const { linkUrl, imageUrl } = item;
  return (
    <CardContainer>
      <Image onClick={() => history.push(`${url}${linkUrl}`)} src={imageUrl} />
    </CardContainer>
  );
};

export default withRouter(CarouselCard);
