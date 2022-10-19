import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBKcUkBTHlAgNhwEahDH8gCEsvBj3yaK90',
    authDomain: 'twitter-clone-a6cee.firebaseapp.com',
    projectId: 'twitter-clone-a6cee',
    storageBucket: 'twitter-clone-a6cee.appspot.com',
    messagingSenderId: '822485612191',
    appId: '1:822485612191:web:067292c26adf009ba794aa',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, firebaseApp, auth };
