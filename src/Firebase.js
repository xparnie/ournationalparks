import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAVrObAK5HpJwhsh7aMHCIZ7zvjruRdEx0",
    authDomain: "our-national-parks.firebaseapp.com",
    databaseURL: "https://our-national-parks.firebaseio.com",
    projectId: "our-national-parks",
    storageBucket: "",
    messagingSenderId: "259676285568",
    appId: "1:259676285568:web:ffff1499044071f101d465"
  };

const firebaseConf = firebase.initializeApp(firebaseConfig);

export default firebaseConf;