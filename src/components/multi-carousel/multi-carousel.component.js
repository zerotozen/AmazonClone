import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselCard from "../carousel-card/carousel-card.component";
import CustomDot from "../custom-dots/custom-dots.component";
import {
  CustomRightArrow,
  CustomLeftArrow,
} from "../custom-arrows/custom-arrows.component";

import { connect } from "react-redux";

import {
  ComponentContainer,
  TitleContainer,
  Title,
  Link,
} from "./multi-carousel.styles";

const MultiCarousel = ({ collection, category }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <ComponentContainer>
      <TitleContainer >
        <Title>{collection[category].title}</Title>
        <Link>Shop Now</Link>
      </TitleContainer>

      <Carousel
        centerMode={true}
        showDots={true}
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
      >
        {collection[category].items.map((item) => {
          return (
            <CarouselCard
              key={item.id}
              item={item}
              url={collection[category].linkUrl}
            />
          );
        })}
      </Carousel>
    </ComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  collection: state.product.collections,
});

export default connect(mapStateToProps)(MultiCarousel);
