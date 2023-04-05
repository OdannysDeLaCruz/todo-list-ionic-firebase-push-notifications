import { ref } from "vue";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export function useFirebaseMessaging() {
    const messaging = getMessaging();
    const token: any = ref(null)

    // Add the public key generated from the console here.
    getToken(messaging, { vapidKey: process.env.VAPID_KEY })
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

    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
        // ...
    })

    return {}
}