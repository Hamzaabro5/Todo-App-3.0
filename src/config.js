import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg1_gys9t-Tf-TNM8ObZ-TBRaF5mPUOlo",
  authDomain: "todo-app-v3-a62dc.firebaseapp.com",
  projectId: "todo-app-v3-a62dc",
  storageBucket: "todo-app-v3-a62dc.appspot.com",
  messagingSenderId: "89952053160",
  appId: "1:89952053160:web:26c2d81f0471cecb41df9d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);