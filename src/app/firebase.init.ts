import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCzisrsEFOJWCBTWSNu1SdjisbvjnBtyNM',
  authDomain: 'mhawpay.firebaseapp.com',
  databaseURL: 'https://mhawpay-default-rtdb.firebaseio.com',
  projectId: 'mhawpay',
  storageBucket: 'mhawpay.appspot.com',
  messagingSenderId: '215325553648',
  appId: '1:215325553648:web:356cb2c90d90d1b3a76335',
  measurementId: 'G-34NSZ7M7BR',
};

export default function initializeFirebaseApp() {
  return () => initializeApp(firebaseConfig);
}
