import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyC7_3tbjScM8ZxEd62kaM2GjE1a6owaC3M",
  authDomain: "book-santa-174ad.firebaseapp.com",
  databaseURL: "https://book-santa-174ad.firebaseio.com",
  projectId: "book-santa-174ad",
  storageBucket: "book-santa-174ad.appspot.com",
  messagingSenderId: "459104730824",
  appId: "1:459104730824:web:91b28277f7d10ed0e06ffd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
