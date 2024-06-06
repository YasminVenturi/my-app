import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyDQU1cBqFI2TDBvw_fPUfXNNS7tVeRY11c",
    authDomain: "my-app-3a576.firebaseapp.com",
    projectId: "my-app-3a576",
    storageBucket: "my-app-3a576.appspot.com",
    messagingSenderId: "224744764763",
    appId: "1:224744764763:web:3dae73cd62a473595b967e",
    measurementId: "G-BSTLCLGJ5C"
}


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app)