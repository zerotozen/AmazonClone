import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEGffR0M4Rf29pntl9tsiXmBcLlYLF_Yo",
  authDomain: "clone-2c3b0.firebaseapp.com",
  projectId: "clone-2c3b0",
  storageBucket: "clone-2c3b0.appspot.com",
  messagingSenderId: "40580541701",
  appId: "1:40580541701:web:564d3f192e2fe1c5d99b6c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//Esta funcion se crear para convertir el array que recibimos de firebase a un objecto
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, subtitle, advert, imageUrl, linkUrl, items } = doc.data();

    return {
      id: doc.id,
      title,
      subtitle,
      advert,
      imageUrl,
      linkUrl,
      items,
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.linkUrl.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
