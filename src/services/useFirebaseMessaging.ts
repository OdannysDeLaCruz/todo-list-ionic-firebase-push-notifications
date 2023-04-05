import { ref } from "vue";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export function useFirebaseMessaging() {
    const messaging = getMessaging();
    const token: any = ref(null)

    console.log('VUE_APP_VAPID_KEY', process.env.VUE_APP_VAPID_KEY)

    // Add the public key generated from the console here.
    

    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
        // ...
    })

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            getToken(messaging, { vapidKey: process.env.VUE_APP_VAPID_KEY })
            .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    token.value = currentToken
                    console.log('Token:', currentToken)
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.')
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            })
        } else {
            console.log('Unable to get permission to notify.');
        }
    })

    return {}
}