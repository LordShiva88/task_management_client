import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuHqY6CkRU703khy1kYPFSrGhdSkn5_Gg",
  authDomain: "taskmagnet-8d201.firebaseapp.com",
  projectId: "taskmagnet-8d201",
  storageBucket: "taskmagnet-8d201.appspot.com",
  messagingSenderId: "422298425136",
  appId: "1:422298425136:web:2182c3a856470cfe999af5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
