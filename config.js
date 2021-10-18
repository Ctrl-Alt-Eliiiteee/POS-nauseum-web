const firebaseConfig = {
  apiKey: "AIzaSyBNSSfK0ITGf6ntvCscimeuRwzp1PqftQg",
  authDomain: "posnauseam.firebaseapp.com",
  databaseURL: "https://posnauseam-default-rtdb.firebaseio.com",
  projectId: "posnauseam",
  storageBucket: "posnauseam.appspot.com",
  messagingSenderId: "319175246115",
  appId: "1:319175246115:web:db63ae4f0e481a7c0a8c96"
};

firebase.initializeApp(firebaseConfig);

if ('serviceWorker' in navigator) {
  window.addEventListener('flutter-first-frame', function () {
    navigator.serviceWorker.register('flutter_service_worker.js?v=1858148840');
  });
}