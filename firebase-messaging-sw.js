importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"
);

// Initialize Firebase - ONLY v8 style with compat SDK
const firebaseConfig = {
  apiKey: "AIzaSyCn0D2cNZ3Bj6VQ-HhgkIG8e9JqHdFazOc",
  authDomain: "hub-notification-23fcd.firebaseapp.com",
  databaseURL: "https://hub-notification-23fcd-default-rtdb.firebaseio.com",
  projectId: "hub-notification-23fcd",
  storageBucket: "hub-notification-23fcd.firebasestorage.app",
  messagingSenderId: "26978381423",
  appId: "1:26978381423:web:65be790b70afdda690679a",
  measurementId: "G-GKGNY6JVHE",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png", // optional
    sound: "/notification.mp3", // custom sound path if supported
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
