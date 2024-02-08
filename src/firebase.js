import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOd61VbPsp1Pgo9Y74Ra1Y2pr3GTLm9_g",
  authDomain: "swiss-money-transfer.firebaseapp.com",
  projectId: "swiss-money-transfer",
  storageBucket: "swiss-money-transfer.appspot.com",
  messagingSenderId: "569649694635",
  appId: "1:569649694635:web:0394b1ae5d53cd58d234ee",
  measurementId: "G-QCWWG675RJ"

}

const firebaseApp = firebase.initializeApp({ firebaseConfig });

//const analytics = getAnalytics(app);
const db = firebaseApp.firestore();

export { db };