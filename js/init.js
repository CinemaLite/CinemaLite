/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore

import firebase from "firebase/app";
import "firebase/auth";

// Docs: https://source.corp.google.com/piper///depot/google3/third_party/devsite/firebase/en/docs/auth/web/google-signin.md

function googleProvider() {
  // [START auth_google_provider_create]
  var provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp({
  apiKey: "AIzaSyAbqZ98ysatV3ozNJCG_LniUNYwvA8o-Q0",
  authDomain: "cinemalite-92071.firebaseapp.com",
  projectId: "cinemalite-92071",
  storageBucket: "cinemalite-92071.appspot.com",
  messagingSenderId: "330227688776",
  appId: "1:330227688776:web:787cc6915d74a5f524bf7d",
  measurementId: "G-HW1B5HCVZH"
});
