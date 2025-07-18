// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCn0D2cNZ3Bj6VQ-HhgkIG8e9JqHdFazOc",
  authDomain: "hub-notification-23fcd.firebaseapp.com",
  databaseURL: "https://hub-notification-23fcd-default-rtdb.firebaseio.com",
  projectId: "hub-notification-23fcd",
  storageBucket: "hub-notification-23fcd.appspot.com",
  messagingSenderId: "26978381423",
  appId: "1:26978381423:web:65be790b70afdda690679a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
