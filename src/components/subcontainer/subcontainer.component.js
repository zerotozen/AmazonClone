import React from "react";

import SideNavRow from "../siderow/sidenav-row.component";

import { MdArrowBack } from "react-icons/md";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSubContainerEntries } from "../../redux/sidenav/sidenav.selectors";
import { setSubContainer } from "../../redux/sidenav/sidenav.actions";

import {
  ComponentContainer,
  SubcontainerHeader,
  HeaderTitle,
  SubEntryTitle,
} from "./subcontainer.styles";

const SubContainer = ({ subContainerEntries, setSubContainer, state }) => {
  return (
    <ComponentContainer state={state}>
      <SubcontainerHeader onClick={() => setSubContainer(false)}>
        <HeaderTitle>
          <MdArrowBack size={20} />
          <span>MAIN MENU</span>
        </HeaderTitle>
      </SubcontainerHeader>
      {subContainerEntries.map((subEntry) => (
        <>
          <SubEntryTitle>{subEntry.title}</SubEntryTitle>
          {subEntry.entries.map((superEntry) => (
            <SideNavRow text={superEntry.title} />
          ))}
        </>
      ))}
      <div style={{ minHeight: "60px" }}></div>
    </ComponentContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    subContainerEntries: selectSubContainerEntries,
  });

const mapDispatchToProps = (dispatch) => ({
  setSubContainer: (state) => dispatch(setSubContainer(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubContainer);
