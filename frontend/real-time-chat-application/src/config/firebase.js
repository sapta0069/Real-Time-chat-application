import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyA1lmd4dod8lPEiJ1gAs9HQQTuOhOo0ht0',
  authDomain: 'chat-application-3ee49.firebaseapp.com',
  projectId: 'chat-application-3ee49',
  storageBucket: 'https://console.firebase.google.com/project/chat-application-3ee49/storage/chat-application-3ee49.appspot.com/files',
  messagingSenderId: '338416060015',
  appId: 'chat-application-3ee49',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
