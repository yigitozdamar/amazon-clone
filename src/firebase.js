import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejUd9a3nGTLG3SuzIaoowkUrf5HmAJXA",
  authDomain: "clone-9e34a.firebaseapp.com",
  projectId: "clone-9e34a",
  storageBucket: "clone-9e34a.appspot.com",
  messagingSenderId: "1072668771998",
  appId: "1:1072668771998:web:4b6a3dab16c77813589d8f",
  measurementId: "G-TFD16GVY8K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
