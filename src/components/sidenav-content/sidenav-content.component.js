import React from "react";
import DropDown from "../dropdown/dropdown.component";
import SideNavRow from "../siderow/sidenav-row.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectEntryStore,
  selectDropdownEntries,
} from "../../redux/sidenav/sidenav.selectors";
import { setDropDownEntries } from "../../redux/sidenav/sidenav.actions";

import {
  ComponentContainer,
  SidenavContentHeader,
  SidenavContent,
} from "./sidenav-content.styles";

const SideNavContent = ({
  entryStore,
  dropDownEntries,
  setDropDownEntries,
  state,
}) => {
  return (
    <ComponentContainer state={state}>
      {entryStore &&
        entryStore.map((entry, index) => {
          return (
            <>
              <SidenavContentHeader>{entry.title}</SidenavContentHeader>
              {
                // eslint-disable-next-line
                entry.entries.map((subEntry, index) => {
                  if (subEntry.type) {
                    !dropDownEntries && setDropDownEntries(index);
                    return (
                      <DropDown entries={entry.entries.slice(index + 1)} />
                    );
                  } else if (dropDownEntries && index < dropDownEntries) {
                    return !entry.type.rows ? (
                      // eslint-disable-next-line
                      <a href="#">
                        <SidenavContent>{subEntry.title}</SidenavContent>
                      </a>
                    ) : (
                      <SideNavRow
                        text={subEntry.title}
                        entries={subEntry.entries}
                      />
                    );
                  }
                })
              }
              {index !== entryStore.length - 1 && <hr />}
            </>
          );
        })}
      <div style={{ minHeight: "60px" }}></div>
    </ComponentContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    entryStore: selectEntryStore,
    dropDownEntries: selectDropdownEntries,
  });

const mapDispatchToProps = (dispatch) => ({
  setDropDownEntries: (index) => dispatch(setDropDownEntries(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavContent);
