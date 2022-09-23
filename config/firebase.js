import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvwjxdExfVTQjxVcVpLZik5ksV9uYVCqI",
    authDomain: "toko-online-9d91c.firebaseapp.com",
    projectId: "toko-online-9d91c",
    storageBucket: "toko-online-9d91c.appspot.com",
    messagingSenderId: "168499213155",
    appId: "1:168499213155:web:4b3d6e771b5924470d9956"
  };
  
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();