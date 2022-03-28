// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnfwXZffLC0td_5OmmZ14JPUwkzJ_Q92c",
  authDomain: "olaniyi--clone-fe3ce.firebaseapp.com",
  projectId: "olaniyi--clone-fe3ce",
  storageBucket: "olaniyi--clone-fe3ce.appspot.com",
  messagingSenderId: "624434112843",
  appId: "1:624434112843:web:a0815e1666f78207f660ce",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// const eandp = createUserWithEmailAndPassword(app);

export { db, auth, storage };
