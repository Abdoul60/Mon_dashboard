importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Remplace par ta configuration Firebase (identique à celle du modal)
const firebaseConfig = {
  apiKey: "AIzaSyB77Z1aSpDoDWFdwUt_B6e938_0lUYkuS0",
  authDomain: "dashboard-abdoulaziz.firebaseapp.com",
  projectId: "dashboard-abdoulaziz",
  storageBucket: "dashboard-abdoulaziz.firebasestorage.app",
  messagingSenderId: "1035855374371",
  appId: "1:1035855374371:web:bbd9e1fbc6a044cbc5e996"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Notification', {
    body: body || '',
    icon: icon || null
  });
});