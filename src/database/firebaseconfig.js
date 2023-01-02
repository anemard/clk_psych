import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyA-lRBsdFAP3HQ3zg477XeUZQi8jT2bSO4",
    authDomain: "clk-psych.firebaseapp.com",
    projectId: "clk-psych",
    storageBucket: "clk-psych.appspot.com",
    messagingSenderId: "312339451470",
    appId: "1:312339451470:web:39bc9df7bddbd83a90fd1f"
};

initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth(app)