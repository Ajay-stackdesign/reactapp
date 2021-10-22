import firebase from 'firebase/compat/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9tCE-TRD1OAL-HLP3JGEzDW1EgheSJys",
    authDomain: "tinder-clone-cbd52.firebaseapp.com",
    databaseURl: "https://tinder-clone-cbd52.firebaseio.com",
    projectId: "tinder-clone-cbd52",
    storageBucket: "tinder-clone-cbd52.appspot.com",
    messagingSenderId: "656739072678",
    appId: "1:656739072678:web:f6d54d0d5be81ca72e1267",
    measurementId: "G-3FSRHSYR85"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
