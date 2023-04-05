<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { IonApp, IonRouterOutlet, isPlatform } from '@ionic/vue';
// import { ActionPerformed, PushNotificationSchema, PushNotifications, Token} from '@capacitor/push-notifications';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFirebaseConfig } from './services/useFirebaseConfig';
import { useFirebaseMessaging } from './services/useFirebaseMessaging';

onMounted(() => {
    const { firebaseApp } = useFirebaseConfig()
    console.log('desktop', isPlatform('desktop'))
    
    if ( isPlatform('desktop') ) {
        useFirebaseMessaging()
        // Auth
        // const auth = getAuth(firebaseApp.value)
        // const user = auth.currentUser;
        // console.log(user)

        // if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            // console.log(user)
            // const uid = user.uid;
        // }

        // onAuthStateChanged(auth, user => {
        //     if (user) {
        //         console.log('Ok')
        //     } else {
        //         console.log('Not')
        //     }
        // })
    } 
    else {
      console.log('Estoy en mobile')
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        // PushNotifications.requestPermissions().then(result => {
        //     if (result.receive === 'granted') {
        //         // Register with Apple / Google to receive push via APNS/FCM
        //         PushNotifications.register();
        //     } else {
        //         // Show some error
        //     }
        // });
    
        // On success, we should be able to receive notifications
        // PushNotifications.addListener('registration',
        //     (token: Token) => {
        //         alert('Push registration success, token: ' + token.value);
        //     }
        // );
    
        // Some issue with our setup and push will not work
        // PushNotifications.addListener('registrationError',
        //     (error: any) => {
        //         alert('Error on registration: ' + JSON.stringify(error));
        //     }
        // );
      
        // Show us the notification payload if the app is open on our device
        // PushNotifications.addListener('pushNotificationReceived',
        //   (notification: PushNotificationSchema) => {
        //     alert('Push received: ' + JSON.stringify(notification));
        //   }
        // );
      
        // Method called when tapping on a notification
        // PushNotifications.addListener('pushNotificationActionPerformed',
        //   (notification: ActionPerformed) => {
        //     alert('Push action performed: ' + JSON.stringify(notification));
        //   }
        // );
    }
})




</script>
