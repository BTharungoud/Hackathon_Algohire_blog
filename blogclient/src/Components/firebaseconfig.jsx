// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZoui9xvGDO9BBqHD0kRY3qEYHYrkIc-A",
  authDomain: "blogpage-algohire.firebaseapp.com",
  projectId: "blogpage-algohire",
  storageBucket: "blogpage-algohire.appspot.com",
  messagingSenderId: "741166699225",
  appId: "1:741166699225:web:67e0f597d1de1cb991a4c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};