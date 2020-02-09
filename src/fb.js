import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCKz3TCkoruHfOhY3kqQDbtSfR8otsO1aA",
    authDomain: "vishwakarma-d3f25.firebaseapp.com",
    databaseURL: "https://vishwakarma-d3f25.firebaseio.com",
    projectId: "vishwakarma-d3f25",
    storageBucket: "vishwakarma-d3f25.appspot.com",
    messagingSenderId: "619378272836",
    appId: "1:619378272836:web:e10b796759b60c2716ea11",
    measurementId: "G-B3ET3ZXYS3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  //db.settings({timestampsInSnapshots:true});
  export default db;

