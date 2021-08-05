import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

import { ComponentContainer, Arrow } from "./sidenav-row.styles";

import { connect } from "react-redux";
import {
  setSubContainer,
  setSubContainerEntries,
} from "../../redux/sidenav/sidenav.actions";

const SideNavRow = ({
  setSubContainer,
  setSubContainerEntries,
  text,
  entries,
}) => {
  const openRow = () => {
    setSubContainer(true);
    setSubContainerEntries(entries);
  };

  return (
    <ComponentContainer onClick={() => entries && openRow()}>
      <div>{text}</div>
      <Arrow>
        <MdKeyboardArrowRight size={25} />
      </Arrow>
    </ComponentContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSubContainer: (state) => dispatch(setSubContainer(state)),
  setSubContainerEntries: (entries) =>
    dispatch(setSubContainerEntries(entries)),
});

export default connect(null, mapDispatchToProps)(SideNavRow);
