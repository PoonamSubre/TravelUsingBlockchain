import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBa-AtFuPM-bhEKsXNdWkUomro4q5ygVhM",
  authDomain: "siddhesh-travels.firebaseapp.com",
  projectId: "siddhesh-travels",
  storageBucket: "siddhesh-travels.appspot.com",
  messagingSenderId: "904772354648",
  appId: "1:904772354648:web:ef0b35c57115f51aee802d",
  measurementId: "G-5T38T4E404"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
