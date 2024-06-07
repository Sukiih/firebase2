import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseconfig";

const auth = getAuth(app)

export { auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
