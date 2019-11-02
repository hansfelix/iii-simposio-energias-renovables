import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
        apiKey: "AIzaSyBV5tN4MRHLpzXO9-3tDtM0wJlKHdcMz2k",
        authDomain: "iiiser.firebaseapp.com",
        databaseURL: "https://iiiser.firebaseio.com",
        projectId: "iiiser",
        storageBucket: "iiiser.appspot.com",
        messagingSenderId: "613001261816",
        appId: "1:613001261816:web:73af39aa7c3a0b9844c10d"
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({})
}

const fireDb = firebase.firestore()

export { fireDb }