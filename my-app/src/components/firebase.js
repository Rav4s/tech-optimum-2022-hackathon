// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";

import { getFirestore, query, getDocs, collection, where, addDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
var signedIn = false;

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        if (err.code == "auth/wrong-password" || err.code == "auth/internal-error") {
            alert("Incorrect Password!");
        }
        if (err.code == "auth/user-not-found" || err.code == "auth/invalid-email") {
            alert("Incorrect Username!");
        }
        console.error(err.code);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
    }
};

const updateUserPreferences = async (preferences) => {
    var user = auth.currentUser;
    if (user) {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const qSnapshot = await getDocs(q);
        qSnapshot.forEach(async (document) => {
            let Document = document.data()
            Document['travelType'] = preferences.travelType
            Document['budgetType'] = preferences.budgetType;
            Document['categoryTypes'] = preferences.categoryTypes
            console.log(Document)
            await setDoc(doc(db, 'users', document.id), Document)
        })
    }
}

const checkForPreferences = async () =>{
    let user = auth.currentUser;
    let found = false;
    if(user){
        const q = query(collection(db,'users'),where('uid','==',user.uid));
        const qSnapshot = await getDocs(q);
        qSnapshot.forEach(async (document)=>{
            let Document = document.data()
            found = Document['travelType'] != undefined
            
        })
    }
    return found;
}

const getPreferences = async () =>{
    let user = auth.currentUser;
    let prefs = {}
    if(user){
        const q = query(collection(db,'users'),where('uid','==',user.uid));
        const qSnapshot = await getDocs(q);
        qSnapshot.forEach(document=>{
            let Document = document.data();
            prefs = {
                travelType:Document['travelType'],
                budgetType:Document['budgetType'],
                categoryTypes:Document['categoryTypes']
            }
            
        })
        
    }
    return prefs
}

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    updateUserPreferences,
    checkForPreferences,
    getPreferences
};
