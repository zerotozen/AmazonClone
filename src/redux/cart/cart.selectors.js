import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  //el primer valor es una coleccion de input selectors
  [selectCart],
  //retorna el valor que queremos del selector
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      ? cartItems.reduce(
          (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
          0
        )
      : 0
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems
    ? cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
    : 0
);

export const selectBuyState = createSelector(
  [selectCart],
  (cart) => cart.buyNow
);
