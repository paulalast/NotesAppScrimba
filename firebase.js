import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyC0SV4h02si538fw40ylJrix3wZNUEDxuk",
	authDomain: "react-notes-2959c.firebaseapp.com",
	projectId: "react-notes-2959c",
	storageBucket: "react-notes-2959c.appspot.com",
	messagingSenderId: "608729515472",
	appId: "1:608729515472:web:8a9a6f8c5efac0abce65d5",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
