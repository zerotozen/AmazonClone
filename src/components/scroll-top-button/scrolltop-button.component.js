import React from "react";

import { ComponentContainer, Title } from "./scrolltop-button.styles";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ComponentContainer onClick={scrollToTop} >
      <Title>Back to top</Title>
    </ComponentContainer>
  );
};

export default ScrollToTopButton;
