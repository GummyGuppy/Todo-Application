import firebase from 'firebase/app'
import 'firebase/firestore'


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAkQ-kCPQAICJxZf4rlyXV7iMLUOAJGZUo",
    authDomain: "birdinthehand-5d5f7.firebaseapp.com",
    projectId: "birdinthehand-5d5f7"
  });
}else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore()
export {db}