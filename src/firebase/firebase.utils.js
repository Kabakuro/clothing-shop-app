import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmxLt5LjWnnHA0VhbvAADp2UvYkDBBK5U",
    authDomain: "crwn-db-5eaf9.firebaseapp.com",
    databaseURL: "https://crwn-db-5eaf9.firebaseio.com",
    projectId: "crwn-db-5eaf9",
    storageBucket: "crwn-db-5eaf9.appspot.com",
    messagingSenderId: "174137500569",
    appId: "1:174137500569:web:58933abcdca2222d7fa908",
    measurementId: "G-QJ1ZP0FZB8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;