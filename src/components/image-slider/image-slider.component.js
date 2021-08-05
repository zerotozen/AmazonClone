import React from "react";

import AlexWongGift from "../../assets/alexwong-slider.gif";

import {
  ComponentContainer,
  LeftArrow,
  RightArrow,
  Img,
} from "./image-slider.styles";

class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [
        {
          id: 1,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg",
        },
        {
          id: 2,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_PCs_es_US_1x._CB432520777_.jpg",
        },
        {
          id: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_es_US_1x._CB431858163_.jpg",
        },
        {
          id: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_es_US_1x._CB428980075_.jpg",
        },
        {
          id: 5,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_es_US_1x._CB429092340_.jpg",
        },
        {
          id: 6,
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg",
        },
        {
          id: 7,
          image: `${AlexWongGift}`,
        },
      ],
      index: 0,
    };
  }

  componentDidMount() {
    const interval = setInterval(this.nextSlide, 4000);
    this.interval = interval;
  }

  componentWillUnmount() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  nextSlide = () => {
    const { images, index } = this.state;
    if (index === images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  };

  prevSlide = () => {
    const { images, index } = this.state;
    if (index === 0) {
      this.setState({ index: images.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  };

  render() {
    const { images, index } = this.state;
    return (
      <ComponentContainer>
        <LeftArrow onClick={this.prevSlide}  />
        {<Img  src={images[index].image} alt="" />}
        <RightArrow onClick={this.nextSlide} />
      </ComponentContainer>
    );
  }
}

export default ImageSlider;
