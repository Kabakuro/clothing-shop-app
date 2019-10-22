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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;