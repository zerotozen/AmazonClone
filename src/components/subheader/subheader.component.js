import React, { useState } from "react";

import HamburgerButton from "../hamburger-button/hamburger-button.component";
import Sidenav from "../sidenav/sidenav.component";
import { Transition } from "react-transition-group";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setSubContainer } from "../../redux/sidenav/sidenav.actions";
import { selectEntryStore } from "../../redux/sidenav/sidenav.selectors";

import {
  ComponentContainer,
  ButtonContainer,
  Overlay,
  CloseBtn,
  SubheaderUl,
  ListContainer,
  Li,
} from "./subheader.styles";

const SubHeader = ({ entryStore, setSubContainer }) => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <ComponentContainer>
      <ButtonContainer>
        <HamburgerButton click={openNav} />
      </ButtonContainer>
      <Transition
        in={navOpen && entryStore}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          if (state === "exited") setSubContainer(false);
          return (
            <div>
              <Sidenav state={state} />
              <Overlay state={state} onClick={closeNav}></Overlay>
              <CloseBtn onClick={closeNav}>&times;</CloseBtn>
            </div>
          );
        }}
      </Transition>

      <SubheaderUl>
        <ListContainer>
          <Li>Today's Deals</Li>
        </ListContainer>
        <ListContainer>
          <Li>Customer Servive</Li>
        </ListContainer>
        <ListContainer>
          <Li>Gifst Cards</Li>
        </ListContainer>
        <ListContainer>
          <Li>Registry</Li>
        </ListContainer>
        <ListContainer>
          <Li>Sell</Li>
        </ListContainer>
      </SubheaderUl>
    </ComponentContainer>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    entryStore: selectEntryStore,
  });

const mapDispatchToProps = (dispatch) => ({
  setSubContainer: (state) => dispatch(setSubContainer(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
