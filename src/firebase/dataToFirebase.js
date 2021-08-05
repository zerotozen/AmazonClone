import { db } from "./firebase";
import PRODUCT_DATA from "./dataToExport";

//Creamos esta funcion para exportar nuestra collecion a firebase
const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = db.collection(collectionKey);
  //console.log(collectionRef);

  const batch = db.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    //console.log(newDocRef);
  });
  return await batch.commit();
};

export default addCollectionsAndDocuments;
