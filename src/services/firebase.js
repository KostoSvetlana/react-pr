import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA_Guscq491NPyo-vMCtGIztuDFVxGSuJY",
    authDomain: "react--pr.firebaseapp.com",
    databaseURL: "https://react--pr-default-rtdb.firebaseio.com",
    projectId: "react--pr",
    storageBucket: "react--pr.appspot.com",
    messagingSenderId: "1024494320339",
    appId: "1:1024494320339:web:10dc7b7b3d51713294b226"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);