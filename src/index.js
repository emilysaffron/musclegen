import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebaseConfig from "./firebaseConfig";
import Firebase from "firebase";
Firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
