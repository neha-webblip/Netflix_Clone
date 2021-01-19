import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'; 

const config = {
  apiKey: "AIzaSyCWpYZyApgxZnrohvvsmJgATP81AWeCt78",
  authDomain: "netflix-clone-5f93b.firebaseapp.com",
  databaseURL: "https://netflix-clone-5f93b.firebaseio.com",
  projectId: "netflix-clone-5f93b",
  storageBucket: "netflix-clone-5f93b.appspot.com",
  messagingSenderId: "847513961019",
  appId: "1:847513961019:web:400aed6723e0523dcc521e"
};



const firebase = Firebase.initializeApp (config);
 
seedDatabase(firebase);

export {firebase};