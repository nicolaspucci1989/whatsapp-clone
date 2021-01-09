import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrNa_PmYxXG3WAd1FvXCnB2KL2wcB1IB4",
  authDomain: "whatsapp-clone-2a1a4.firebaseapp.com",
  projectId: "whatsapp-clone-2a1a4",
  storageBucket: "whatsapp-clone-2a1a4.appspot.com",
  messagingSenderId: "238936631995",
  appId: "1:238936631995:web:c0c706d2d1e478ec82579e",
  measurementId: "G-30TL7WCE1Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
