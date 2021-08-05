import SidenavActionTypes from "./sidenav.types";

export const setSubContainer = (state) => ({
  type: SidenavActionTypes.SET_SUBCONTAINER,
  payload: state,
});

export const setSubContainerEntries = (state) => ({
  type: SidenavActionTypes.SET_SUBCONTAINER_ENTRIES,
  payload: state,
});

export const setEntryStore = () => ({
  type: SidenavActionTypes.SET_ENTRY_STORE,
});

export const setDropDownEntries = (index) => ({
  type: SidenavActionTypes.SET_DROPDOWN_ENTRIES,
  payload: index,
});
