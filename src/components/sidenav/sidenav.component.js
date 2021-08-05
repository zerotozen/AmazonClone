import React from "react";

import { connect } from "react-redux";

import SideNavContent from "../sidenav-content/sidenav-content.component";
import SubContainer from "../subcontainer/subcontainer.component";

import { Transition } from "react-transition-group";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectSubContainer } from "../../redux/sidenav/sidenav.selectors";

import { ComponentContainer, SidenavHeader } from "./sidenav.styles";

const SideNav = ({ subContainer, state, currentUser }) => {
  return (
    <ComponentContainer>
      <SidenavHeader>
        <i></i>{" "}
        {currentUser ? `Hello, ${currentUser.displayName}` : "Hello, Sign In"}
      </SidenavHeader>
      <Transition in={!subContainer} timeout={300} unmountOnExit mountOnEnter>
        {(state) => <SideNavContent state={state} />}
      </Transition>
      <Transition in={subContainer} timeout={300} unmountOnExit mountOnEnter>
        {(state) => <SubContainer state={state} />}
      </Transition>
    </ComponentContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    subContainer: selectSubContainer,
  });

export default connect(mapStateToProps)(SideNav);
