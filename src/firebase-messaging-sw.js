// // importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js');
// // importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging.js');
// import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage, onBackgroundMessage } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyA3nqbym1xB5o_CTaLnFIf2eAxFYve9XJ0",
//     authDomain: "superbeauty-todo-list-test.firebaseapp.com",
//     projectId: "superbeauty-todo-list-test",
//     storageBucket: "superbeauty-todo-list-test.appspot.com",
//     messagingSenderId: "625189552131",
//     appId: "1:625189552131:web:da335506c81cba92a7ce36",
//     measurementId: "G-ZJ0NGXV4NR"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);
// console.log(messaging)


// onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
// });