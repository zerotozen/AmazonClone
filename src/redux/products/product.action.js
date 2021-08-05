import ProductActionTypes from "./product.types";

import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase";

//Thunk es un action creator que devuelve una funcion to mapStateToProps.
//Devuelve una funcion en vez de una accion, accion = objeto javascript

export const fetchCollectionsStart = () => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = (collectionsMap) => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ProductActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = db.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSucces(collectionsMap));
      })
      .catch((error) =>
        dispatch(
          fetchCollectionsFailure("no ha sido posible obtener los datos")
        )
      );
  };
};
