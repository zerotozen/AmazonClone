import { createSelector } from "reselect";

const selectSidenav = (state) => state.sidenav;

export const selectSubContainer = createSelector(
  [selectSidenav],
  (sidenav) => sidenav.subContainer
);

export const selectSubContainerEntries = createSelector(
  [selectSidenav],
  (sidenav) => sidenav.subContainerEntries
);

export const selectEntryStore = createSelector(
  [selectSidenav],
  (sidenav) => sidenav.entryStore
);

export const selectDropdownEntries = createSelector(
  [selectSidenav],
  (sidenav) => sidenav.dropDownEntries
);
