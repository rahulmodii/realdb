import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAfsA2XvZJ8L-T1GzHjEIhYyR-w-5pTkgw",
    authDomain: "realtimedb-736d4.firebaseapp.com",
    databaseURL: "https://realtimedb-736d4.firebaseio.com",
    projectId: "realtimedb-736d4",
    storageBucket: "realtimedb-736d4.appspot.com",
    messagingSenderId: "377583373113",
    appId: "1:377583373113:web:e8d8bd4edd897fa275b6e8",
    measurementId: "G-QZS6YHPJTG"
  };
  firebase.initializeApp(config);
  export default firebase;