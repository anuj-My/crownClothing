import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA60-H9NdwVPGIcUvWOslSB0MpSrPmcsQ",
  authDomain: "crown-clothing-ebd1e.firebaseapp.com",
  projectId: "crown-clothing-ebd1e",
  storageBucket: "crown-clothing-ebd1e.appspot.com",
  messagingSenderId: "759707261252",
  appId: "1:759707261252:web:993ef88c3be9690c019f11",
};

const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // !get document reference of users collection inside db using user uid
  const userDocRef = doc(db, "users", userAuth.uid);

  // if user data does not exist
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exist
  return userDocRef;
};
