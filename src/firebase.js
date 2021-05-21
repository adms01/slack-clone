import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBu5MzY4TehX7treVCGij3Fevmm9G5nxSk",
  authDomain: "slack-clone-a7961.firebaseapp.com",
  projectId: "slack-clone-a7961",
  storageBucket: "slack-clone-a7961.appspot.com",
  messagingSenderId: "13325376057",
  appId: "1:13325376057:web:f88471fb8f5e6ffa184be8",
};

//Connects frontend to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Lets frontend access database
const db = firebaseApp.firestore();

//brings auth to frontend
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

//Collection of rooms, the rooms themseles, every room has a collection of messages as documents

export { auth, db, provider };
