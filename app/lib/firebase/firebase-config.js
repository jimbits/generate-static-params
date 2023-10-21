var admin = require("firebase-admin");
var {initializeApp, getApps} = require("firebase-admin/app")

// service Account Key
var serviceAccount = require("config/serviceAccountKey.json");

// singleton
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR REAL TIME DATA BASE URL HERE",
    databaseAuthVariableOverride: {
      uid: "your service name"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()

export {db}

 