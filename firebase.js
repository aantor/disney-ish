import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAaP8LLm8xhhgbwZhTtO2p4_J3CDte814Q',
  authDomain: 'todo-f8599.firebaseapp.com',
  databaseURL: 'https://todo-f8599-default-rtdb.firebaseio.com',
  projectId: 'todo-f8599',
  storageBucket: 'todo-f8599.appspot.com',
  messagingSenderId: '386853134197',
  appId: '1:386853134197:web:78a04245c4014e1388bd3c',
  measurementId: 'G-F5FK3NBB2X',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
