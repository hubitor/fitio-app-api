const functions = require("firebase-functions");

module.exports =
  functions.config().app.environment === "dev"
    ? {
        apiKey: "AIzaSyAE3S-sn36k1KrYWgdiHCUp9mWQM_R8TCQ",
        authDomain: "fitio-app-dev.firebaseapp.com",
        databaseURL: "https://fitio-app-dev.firebaseio.com",
        projectId: "fitio-app-dev",
        storageBucket: "fitio-app-dev.appspot.com",
        messagingSenderId: "652970790114",
        appId: "1:652970790114:web:faba68e79f8ae4293ea2bb",
        measurementId: "G-4W7KL09Q5R"
      }
    : {
        apiKey: "AIzaSyCYH2DcvFyOxYHZSCE2sQTQR1sJ-a8UrBk",
        authDomain: "fitio-app-prod.firebaseapp.com",
        databaseURL: "https://fitio-app-prod.firebaseio.com",
        projectId: "fitio-app-prod",
        storageBucket: "fitio-app-prod.appspot.com",
        messagingSenderId: "536320526027",
        appId: "1:536320526027:web:5fa4ca9eda0ba24b85bd4e",
        measurementId: "G-D9R2F8E7Y2"
      };
