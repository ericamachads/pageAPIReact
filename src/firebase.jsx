// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDsUOgX_PQDaBp9nz7ezJXTas0X2bnbK98',
  authDomain: 'formulariodecontato-ebce3.firebaseapp.com',
  databaseURL: 'https://formulariodecontato-ebce3-default-rtdb.firebaseio.com',
  projectId: 'formulariodecontato-ebce3',
  storageBucket: 'formulariodecontato-ebce3.appspot.com',
  messagingSenderId: '104425795254',
  appId: '1:104425795254:web:ce1df3fa371b2ffd9a0017',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database };
