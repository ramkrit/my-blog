import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1noWGbegCNg_mXagAimiGpt9M9BVVGR4",
  authDomain: "my-react-blog-f3b2a.firebaseapp.com",
  projectId: "my-react-blog-f3b2a",
  storageBucket: "my-react-blog-f3b2a.appspot.com",
  messagingSenderId: "276370582742",
  appId: "1:276370582742:web:f41d87b4c8f37fe43e6d77",
  measurementId: "G-1H6ZN91RTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
