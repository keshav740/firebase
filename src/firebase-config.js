import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBddHkFBDujSI1uj1Asa_2svtdwA44Hkt8",
    authDomain: "fir-2e16f.firebaseapp.com",
    projectId: "fir-2e16f",
    storageBucket: "fir-2e16f.appspot.com",
    messagingSenderId: "879780565974",
    appId: "1:879780565974:web:6ca31ad7f6c4180fb40a77",
    measurementId: "G-GW9W61NE2X"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  