import firebase from "firebase";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("11WGvxqwzhT4XsXTYtFF")
  .collection("cartItems")
  .doc("BRrmjO8B0vGL4kblQ54Z");

firestore.doc("/users/11WGvxqwzhT4XsXTYtFF/cartItems/BRrmjO8B0vGL4kblQ54Z");
firestore.collection("/users/11WGvxqwzhT4XsXTYtFF/cartItems");
