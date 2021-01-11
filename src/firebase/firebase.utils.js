import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCU-le3mGRJMY4W1Z9kGTT-844S8cH7PCQ",
  authDomain: "crwn-clothing-52b9a.firebaseapp.com",
  projectId: "crwn-clothing-52b9a",
  storageBucket: "crwn-clothing-52b9a.appspot.com",
  messagingSenderId: "1019847782366",
  appId: "1:1019847782366:web:48eedea12597e89418374f",
  measurementId: "G-WFFL1FGFDE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();
  console.log(snapShop);
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
