<template>
    <ion-page>
        <ion-header>
            <ion-title>Login</ion-title>
        </ion-header>
        <ion-content>
            <form action="">
                <ion-input label="Email" placeholder="Enter your email"></ion-input>
                <ion-input label="Password" placeholder="Enter your password"></ion-input>
                <ion-button>Sing In</ion-button>
            </form>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';
</script>