import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDKheFra3au1CcY8N58sJZ6g58IteVNn9M",
        authDomain: "coffe-queen.firebaseapp.com",
        databaseURL: "https://coffe-queen.firebaseio.com",
        projectId: "coffe-queen",
        storageBucket: "coffe-queen.appspot.com",
        messagingSenderId: "545706243126",
        appId: "1:545706243126:web:0fc86562fba0540f46d497",
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export { firebase };