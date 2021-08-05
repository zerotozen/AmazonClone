import React from "react";
import Directory from "../../components/directory/directory.component";
import ImageSlider from "../../components/image-slider/image-slider.component";

import { HomePageContainer } from "./homepage.styles";

const Home = () => {
  return (
    <HomePageContainer >
      <ImageSlider />
      <Directory />
    </HomePageContainer>
  );
};

export default Home;
