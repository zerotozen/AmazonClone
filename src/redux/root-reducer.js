import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import productReducer from "./products/product.reducer";
import userReducer from "./user/user.reduce";
import carouselReducer from "./carousel/carousel.reducer";
import sidenavReducer from "./sidenav/sidenav.reducer";
import addressReducer from "./address/addres.reducer";

const persistConfig = {
  //what point you want to start storing everything
  key: "root",
  //we pass storage to our store, so this will say the storage key goes to whatever the storage object is pointed
  storage,
  //solo pasamos cart porque user lo maneja firebase
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  product: productReducer,
  carousel: carouselReducer,
  sidenav: sidenavReducer,
  address: addressReducer,
});

export default persistReducer(persistConfig, rootReducer);
