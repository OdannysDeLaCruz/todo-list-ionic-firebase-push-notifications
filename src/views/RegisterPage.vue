<script setup lang="ts">
import { IonPage, IonHeader, IonTitle,  IonContent, IonInput, IonButton } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useFirebaseConfig } from '@/services/useFirebaseConfig'; 
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";

const email = ref('')
const password = ref('')
const auth: any = ref(null)

onMounted(() => {
    const { firebaseApp } = useFirebaseConfig()
    auth.value = getAuth(firebaseApp.value)
    const user = auth.value.currentUser
    console.log(user)
})

const singUp = () => {
    createUserWithEmailAndPassword(auth.value, email.value, password.value)
    .then((userCredential) => {
        // Signed in
        console.log(userCredential)
    })
    .catch((error) => {
        console.log(error)
    });
}

const singUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential: any = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //     console.log(token, user)
    // }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    // });

    
    signInWithRedirect(auth.value, provider);
    getRedirectResult(auth.value)
    .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token: any = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

</script>
<template>
    <ion-page>
        <ion-header>
            <ion-title>Register</ion-title>
        </ion-header>
        <ion-content>
            <form action="">
                <ion-input label="Username" placeholder="Enter your usernane"></ion-input>
                <ion-input v-model="email" label="Email" placeholder="Enter your email"></ion-input>
                <ion-input v-model="password" label="Password" placeholder="Enter your password"></ion-input>
                <ion-button @click="singUp()">Sing Up</ion-button>
                <hr>
                <ion-button @click="singUpWithGoogle()">With Google</ion-button>
            </form>
        </ion-content>
    </ion-page>
</template>