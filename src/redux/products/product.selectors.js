import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectCollections = createSelector([selectProduct], (product) => {
  return product.collections;
});

//transform object to array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => {
    return collections
      ? Object.keys(collections).map((key) => collections[key])
      : [];
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  });

export const selectOneProduct = (urlParam) =>
  createSelector([selectCollections], (collections) => {
    const a = urlParam.split("/")[1];
    const b = collections[a].items;
    const c = urlParam.split("/")[2];
    for (let i = 0; i < b.length; i++) {
      if (b[i].tag === c) {
        return b[i];
      }
    }
  });

export const selectProductDeteails = (urlParam) =>
  createSelector([selectCollections], (collections) => {
    const a = urlParam.split("/")[1];
    return collections ? collections[a].items : null;
  });
