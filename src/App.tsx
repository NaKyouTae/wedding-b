import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLwviXKDpOnBKFCB3bAd1y66BXiSSu42I",
  authDomain: "wedding-b-9f583.firebaseapp.com",
  projectId: "wedding-b-9f583",
  storageBucket: "wedding-b-9f583.appspot.com",
  messagingSenderId: "215150535476",
  appId: "1:215150535476:web:e28b68d4b5eba9d2837b61",
  measurementId: "G-ZJVTVC7W5M"
};

function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wedding Boyoung Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
