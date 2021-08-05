import React from "react";
import ScrollToTopButton from "../scroll-top-button/scrolltop-button.component";

import {
  ComponentContainer,
  ComponentSubContainer,
  ListContainer,
  Li,
  Title,
} from "./footer.styles";

const Footer = () => {
  return (
    <>
      <ScrollToTopButton />
      <ComponentContainer >
        <ComponentSubContainer >
          <div>
            <ListContainer>
              <Title>Get to Know Us</Title>
              <Li>Careers</Li>
              <Li>Blog</Li>
              <Li>About Amazon</Li>
              <Li>Investor Relations</Li>
              <Li>Amazon Devices</Li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <Title>Make Money with Us</Title>
              <Li>Careers</Li>
              <Li>Blog</Li>
              <Li>About Amazon</Li>
              <Li>Investor Relations</Li>
              <Li>Amazon Devices</Li>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <Title>Amazon Payment Products</Title>
              <Li>Careers</Li>
              <Li>Blog</Li>
              <Li>About Amazon</Li>
              <Li>Investor Relations</Li>
              <Li>Amazon Devices</Li>
            </ListContainer>
          </div>
          <div>
            <Title>Let Us Help You</Title>
            <ListContainer>
              <Li>Careers</Li>
              <Li>Blog</Li>
              <Li>About Amazon</Li>
              <Li>Investor Relations</Li>
              <Li>Amazon Devices</Li>
            </ListContainer>
          </div>
        </ComponentSubContainer>
      </ComponentContainer>
    </>
  );
};

export default Footer;
