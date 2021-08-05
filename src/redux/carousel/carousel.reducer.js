import CAROUSEL__DATA from "./carousel.data";

const INITIAL_STATE = {
  collections: CAROUSEL__DATA,
};

const carouselReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carouselReducer;
