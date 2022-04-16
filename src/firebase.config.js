// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiREh602k5li5fgszx_jplk0zc_SIC62w",
  authDomain: "assignment-10-gym-trainer.firebaseapp.com",
  projectId: "assignment-10-gym-trainer",
  storageBucket: "assignment-10-gym-trainer.appspot.com",
  messagingSenderId: "571675204931",
  appId: "1:571675204931:web:6d6e9e51cc7f7eebfce3f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;