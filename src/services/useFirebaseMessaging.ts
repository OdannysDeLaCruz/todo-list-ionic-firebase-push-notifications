import { ref } from "vue";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export function useFirebaseMessaging() {
    const messaging = getMessaging();
    const token: any = ref(null)

    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
    })

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            getToken(messaging, { vapidKey: process.env.VUE_APP_VAPID_KEY })
            .then((currentToken) => {
                if (currentToken) {
                    token.value = currentToken
                    console.log('Token:', currentToken)
                } else {
                    console.log('No registration token available. Request permission to generate one.')
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err)
            })
        } else {
            console.log('Unable to get permission to notify.');
        }
    })

    return {}
}