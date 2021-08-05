import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import SigninCard from "../sign-in-card/signin-card.component";
import Ad from "../ad/ad.component";
import MultiCarousel from "../../components/multi-carousel/multi-carousel.component";

import { Dimmer, Loader } from "semantic-ui-react";

import {
  ComponentContainer,
  ComponentSubContainer,
  FirstRow,
  SpecialCard,
  SpecialCardTop,
  Button,
  SecondRow,
  LoaderContainer,
} from "./directory.styles";

import { selectCollectionsForPreview } from "../../redux/products/product.selectors";

const Directory = ({ collections }) => {
  const [height, setHight] = useState(0);
  const heightRef = React.createRef();

  useEffect(() => {
    calcularAltura();
    window.addEventListener("resize", calcularAltura);
    return () => {
      window.addEventListener("resize", calcularAltura);
    };
  });

  const calcularAltura = () => {
    setTimeout(() => {
      setHight(heightRef.current?.clientHeight);
    }, 500);
  };

  if (!collections)
    return (
      <LoaderContainer>
        <Dimmer active inverted size="massive">
          <Loader inverted>loading</Loader>
        </Dimmer>
      </LoaderContainer>
    );

  return (
    <>
      <ComponentContainer height={height}>
        <ComponentSubContainer ref={heightRef}>
          <FirstRow>
            <MenuItem props={collections["shopcategory"]} />
            <MenuItem props={collections["computers"]} />
            <MenuItem props={collections["amazonbasics"]} />
            <SpecialCard>
              <SpecialCardTop>
                <SigninCard />
              </SpecialCardTop>
              <Button>
                <Ad />
              </Button>
            </SpecialCard>
            <MenuItem props={collections["oculus"]} />
            <MenuItem props={collections["getfit"]} />
            <MenuItem props={collections["gaming"]} />
            <MenuItem props={collections["tv"]} />
          </FirstRow>

          <MultiCarousel category={"shopcategory"} />
          <MultiCarousel category={"computers"} />

          <SecondRow>
            <MenuItem props={collections["womanclothes"]} />
            <MenuItem props={collections["laptops"]} />
            <MenuItem props={collections["homebed"]} />
            <MenuItem props={collections["gamingmerchandise"]} />
          </SecondRow>

          <MultiCarousel category={"amazonbasics"} />
          <MultiCarousel category={"laptops"} />
        </ComponentSubContainer>
      </ComponentContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: state.product.collections,
    collectionsArray: selectCollectionsForPreview,
  };
};

export default connect(mapStateToProps)(Directory);
