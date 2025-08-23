 import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZDkO-a08OKe_Uh2ub493zmfjPLHnRMZ8",
  authDomain: "kt-almadina-motors.firebaseapp.com",
  projectId: "kt-almadina-motors",
  storageBucket: "kt-almadina-motors.firebasestorage.app",
  messagingSenderId: "545626919282",
  appId: "1:545626919282:web:9c3ec0d8413b81eec08deb"
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { db };






