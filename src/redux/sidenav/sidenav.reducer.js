import CONTENT__DATA from "./sidenav.data";
import SidenavActionTypes from "./sidenav.types";

const INITIAL_STATE = {
  dropDownEntries: null,
  subContainer: false,
  subContainerEntries: false,
  entryStore: CONTENT__DATA,
};

const sidenavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidenavActionTypes.SET_SUBCONTAINER:
      return {
        ...state,
        subContainer: action.payload,
      };
    case SidenavActionTypes.SET_SUBCONTAINER_ENTRIES:
      return {
        ...state,
        subContainerEntries: action.payload,
      };
    case SidenavActionTypes.SET_ENTRY_STORE:
      return {
        ...state,
      };
    case SidenavActionTypes.SET_DROPDOWN_ENTRIES:
      return {
        ...state,
        dropDownEntries: action.payload,
      };

    default:
      return state;
  }
};

export default sidenavReducer;
