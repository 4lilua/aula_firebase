import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcLGYe_d4soKys-cvc6jFWJ6c46OGJpRs",
  authDomain: "app-react-native-align.firebaseapp.com",
  projectId: "app-react-native-align",
  storageBucket: "app-react-native-align.appspot.com",
  messagingSenderId: "712233359547",
  appId: "1:712233359547:web:1b4d4223c2e472ccb7719e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);