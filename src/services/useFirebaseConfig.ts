import { initializeApp } from "firebase/app";
import { ref } from "vue";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3nqbym1xB5o_CTaLnFIf2eAxFYve9XJ0",
    authDomain: "superbeauty-todo-list-test.firebaseapp.com",
    projectId: "superbeauty-todo-list-test",
    storageBucket: "superbeauty-todo-list-test.appspot.com",
    messagingSenderId: "625189552131",
    appId: "1:625189552131:web:da335506c81cba92a7ce36",
    measurementId: "G-ZJ0NGXV4NR"
};

const firebaseApp: any = ref(null)

export function useFirebaseConfig() {
    firebaseApp.value = initializeApp(firebaseConfig);

    return {
        firebaseApp
    }
}