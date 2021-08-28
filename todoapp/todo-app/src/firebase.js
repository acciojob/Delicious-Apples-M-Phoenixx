import firebase from "firebase";
const firebaseApp = firebase.initializeApp( {
apiKey: "AIzaSyCSixGjBmyWN-G6iLgMTs_hAy93oHPzWco",
authDomain: "todo-app-80828.firebaseapp.com",
projectId: "todo-app-80828",
storageBucket: "todo-app-80828.appspot.com",
messagingSenderId: "919346070775",
appId: "1:919346070775:web:25ddb2a0a0eed603e23ff2",
measurementId: "G-SE3D6H9PBD"
});
  const db = firebase.firestore();
  export default db;