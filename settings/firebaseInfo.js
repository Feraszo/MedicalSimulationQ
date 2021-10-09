// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvStruHblZsoJpEG28mLJGKOiUsSxw88g",
  authDomain: "medical-simulation-q.firebaseapp.com",
  databaseURL: "https://medical-simulation-q-default-rtdb.firebaseio.com",
  projectId: "medical-simulation-q",
  storageBucket: "medical-simulation-q.appspot.com",
  messagingSenderId: "977919033741",
  appId: "1:977919033741:web:5be98753102df191853dc4",
  measurementId: "G-156X0R6G80"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();