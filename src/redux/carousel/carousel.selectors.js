import { createSelector } from "reselect";

const selectCarousel = (state) => state.carousel;

export const selectCollections = createSelector(
  [selectCarousel],
  (carousel) => carousel.collections
);