// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

// ==========================================================================================
// Docs: Snippets in this file are "general purpose" and are used on more than one docs page
// ==========================================================================================
firebase.initializeApp(firebaseConfig);

	const auth=firebase.auth();


function makeGoogleCredential(googleUser) {
  // [START auth_make_google_credential]
  var credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.getAuthResponse().id_token);
  // [END auth_make_google_credential]
}

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}


function currentUser() {
  // [START auth_current_user]
  const user = firebase.auth().currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }
  // [END auth_current_user]
}



function signInRedirect(provider) {
  // [START auth_signin_redirect]
  firebase.auth().signInWithRedirect(provider);
  // [END auth_signin_redirect]
}

}
