import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemTitleContainer,
  MenuItemTitle,
  ImageContainer,
  Image,
  MenuImageSubtitle,
} from "./menu-item.sytles";

const MenuItem = ({ props, advert, history, match }) => {
  const { title, imageUrl, subtitle, linkUrl } = props;
  return (
    <MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemTitleContainer >
        <MenuItemTitle>{title}</MenuItemTitle>
      </MenuItemTitleContainer>

      <ImageContainer >
        <Image
          src={advert ? advert : imageUrl}
          alt=""
        />
      </ImageContainer>
      <MenuImageSubtitle>
        <span>{subtitle}</span>
      </MenuImageSubtitle>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
