importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAJ6qXw16K4QrwTVv70jrFw22_rFfTWqYQ",
  authDomain: "cinema-booking-5ea96.firebaseapp.com",
  projectId: "cinema-booking-5ea96",
  storageBucket: "cinema-booking-5ea96.firebasestorage.app",
  messagingSenderId: "96605927647",
  appId: "1:96605927647:web:f34088f3aac0a11300916a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  const title =
    payload.notification?.title ||
    "🎟️ New Cinema Booking";

  const body =
    payload.notification?.body ||
    "Someone booked a ticket.";

  self.registration.showNotification(title, {
    body: body
  });

});