import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsIVXDPiZKATaI92pxL-szHbmuEw5T2og",
  authDomain: "fishbook-6cbd5.firebaseapp.com",
  projectId: "fishbook-6cbd5",
  storageBucket: "fishbook-6cbd5.appspot.com",
  messagingSenderId: "1097401452165",
  appId: "1:1097401452165:web:921762abada1bc377a8bec",
};

const app = initializeApp(firebaseConfig);
//const app = !apps.length ? initializeApp(firebaseConfig) : firebase.app();
export const db = getFirestore(app);
export const storage = getStorage(app);
