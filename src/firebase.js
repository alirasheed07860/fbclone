import firebase from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDuxpP8TIXDHzmU2U5KMbFfgnuSpDhpKnU",
    authDomain: "facebook-clone-8a443.firebaseapp.com",
    projectId: "facebook-clone-8a443",
    storageBucket: "facebook-clone-8a443.appspot.com",
    messagingSenderId: "309197727569",
    appId: "1:309197727569:web:a17d2dee92ae6252e79570",
    measurementId: "G-7NWPXCNWKR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;