// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD3BTOsJgAfJ4jU8uSqy4uV8IHYZdVe_jw',
	authDomain: 'viblo-8b0da.firebaseapp.com',
	projectId: 'viblo-8b0da',
	storageBucket: 'viblo-8b0da.appspot.com',
	messagingSenderId: '996067999228',
	appId: '1:996067999228:web:f57678f89c1a789ced0679',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
