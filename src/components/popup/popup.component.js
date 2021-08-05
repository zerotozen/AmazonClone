import React from "react";

import { ComponentContainer, TextDescription } from "./popup.styles";

const Popup = (props) => {
  return props.trigger ? (
    <ComponentContainer>
      <TextDescription>Your order has been completed</TextDescription>
      <TextDescription>Thank you for buy in Amazon Clone</TextDescription>
    </ComponentContainer>
  ) : (
    ""
  );
};

export default Popup;
