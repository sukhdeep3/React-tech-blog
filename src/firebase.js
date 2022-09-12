import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB4ngTIJ2HeOZkIi4I5SZfmfLBTZKriKfA",
  authDomain: "react-hooks-blog-eed16.firebaseapp.com",
  projectId: "react-hooks-blog-eed16",
  storageBucket: "react-hooks-blog-eed16.appspot.com",
  messagingSenderId: "563371262185",
  appId: "1:563371262185:web:44c51495458999aae73078"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export const firestore= firebase.firestore();