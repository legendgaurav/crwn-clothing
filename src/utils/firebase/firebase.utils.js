import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwCML-O7iF96zzVTZQSHvAQiBo-yyTfyo",
  authDomain: "crwn-clothing-db-e494b.firebaseapp.com",
  projectId: "crwn-clothing-db-e494b",
  storageBucket: "crwn-clothing-db-e494b.appspot.com",
  messagingSenderId: "477411559656",
  appId: "1:477411559656:web:5085d742729b14a4a0615d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('eeor creating the user', error.message);
        }
    }

    return userDocRef;
};
