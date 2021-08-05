import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  ComponentContainer,
  ComponentSubContainer,
} from "./hamburger-button.styles";

const HamburgerButton = (props) => {
  return (
    <ComponentContainer  onClick={props.click}>
      <GiHamburgerMenu size={20} />
      <ComponentSubContainer >
        All
      </ComponentSubContainer>
    </ComponentContainer>
  );
};

export default HamburgerButton;
