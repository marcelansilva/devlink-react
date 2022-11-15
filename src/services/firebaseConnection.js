import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNSU0xsDvnLR214mbvWvrEesdDQe65JEY",
  authDomain: "devlinks-5f7f5.firebaseapp.com",
  projectId: "devlinks-5f7f5",
  storageBucket: "devlinks-5f7f5.appspot.com",
  messagingSenderId: "340177668905",
  appId: "1:340177668905:web:02fcc8f205db1cb7f80538",
  measurementId: "G-01MXQZH7R0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
