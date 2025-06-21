// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmC7QHOWghgIC4i6PaMe8jwROTYCQ383o",
  authDomain: "portfolio-79c4a.firebaseapp.com",
  projectId: "portfolio-79c4a",
  storageBucket: "portfolio-79c4a.firebasestorage.app",
  messagingSenderId: "996773215174",
  appId: "1:996773215174:web:b7878ef83fcdf0693fd0c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const auth = getAuth(app)