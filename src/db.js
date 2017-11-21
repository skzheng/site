import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBAmdmziGjM2IjxwEC6DMf41agIHrhZ3Ew",
  authDomain: "site-823ba.firebaseapp.com",
  databaseURL: "https://site-823ba.firebaseio.com",
  projectId: "site-823ba",
  storageBucket: "site-823ba.appspot.com",
  messagingSenderId: "1036927964940"
};
const fb = firebase.initializeApp(config);

export default fb;