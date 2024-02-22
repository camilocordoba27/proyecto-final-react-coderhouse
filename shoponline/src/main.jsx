import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKY7fE9T0sCs1h9WmOJwa-uwxYhLhKGGU",
  authDomain: "proyecto-final-1429c.firebaseapp.com",
  projectId: "proyecto-final-1429c",
  storageBucket: "proyecto-final-1429c.appspot.com",
  messagingSenderId: "3230389521",
  appId: "1:3230389521:web:a5a9a9915e3873edfce8b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
