
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAXvb0vpf3dFGd7jLPT8CeR_V8AfytGLpU",
  authDomain: "mystore-f7a7e.firebaseapp.com",
  projectId: "mystore-f7a7e",
  storageBucket: "mystore-f7a7e.appspot.com",
  messagingSenderId: "419413616844",
  appId: "1:419413616844:web:26eb5051964cf6b34dfa69"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)