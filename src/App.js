import React from 'react';
import { Navbar, Footer } from './components';
import AppRoutes from './AppRoutes';
import './App.css';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-lRBsdFAP3HQ3zg477XeUZQi8jT2bSO4",
  authDomain: "clk-psych.firebaseapp.com",
  projectId: "clk-psych",
  storageBucket: "clk-psych.appspot.com",
  messagingSenderId: "312339451470",
  appId: "1:312339451470:web:39bc9df7bddbd83a90fd1f"
};

initializeApp(firebaseConfig)
const db = getFirestore()

const colRef = collection(db, "clk")

let data = []
getDocs(colRef)
  .then((snapshot) => {

    snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }))
    console.log(data)
  })
  .catch(err => {
    console.log(err.message)
  })

function App() {
  console.log('this is props in app.js', data)

  return (
    <div className="App">
      <Navbar />
      <AppRoutes props={data}/>
      <Footer />
    </div>
  );
}

export default App;
