import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVEATz8zgHu9Fl3MAtWdeJnKA6yWDD2eM",
  authDomain: "doctors-dev.firebaseapp.com",
  projectId: "doctors-dev",
  storageBucket: "doctors-dev.appspot.com",
  messagingSenderId: "541433934142",
  appId: "1:541433934142:web:2da33bc657d5bc01edfc6f"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

const db = firebase.firestore();

export {
  auth,
  firebase,
  db
}

