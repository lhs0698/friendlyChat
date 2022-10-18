/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";

var config = {
  apiKey: "AIzaSyA6YqjgCvlxkI-EkUCMBEt6LA4M9yFel6I",
  authDomain: "friendlychat-38374.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.comhttps://friendlychat-38374-default-rtdb.firebaseio.com",
  projectId: "friendlychat-38374",
  storageBucket: "friendlychat-38374.appspot.com",
  messagingSenderId: "33267144509",
  appId: "1:33267144509:web:990c198b83a813b6a15754",
  measurementId: "G-8GSGZQ44ST",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
