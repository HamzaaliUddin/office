import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqSlx1YolvSdI9vz5OqQTbQm0c41HleuM",
  authDomain: "cubicus.firebaseapp.com",
  databaseURL: "https://cubicus-default-rtdb.firebaseio.com",
  projectId: "cubicus",
  storageBucket: "cubicus.appspot.com",
  messagingSenderId: "13980256568",
  appId: "1:13980256568:web:558d987ad5ba341bcf19cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
