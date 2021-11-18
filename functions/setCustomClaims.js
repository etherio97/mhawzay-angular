import axios from "axios";
import * as admin from "firebase-admin";
import { env } from "process";

function initializeApp() {
  return axios
    .get(env.FIREBASE_CREDENTIAL_URL, { responseType: "text" })
    .then(({ data }) =>
      admin.initializeApp({
        credential: admin.credential.cert(data),
        databaseURL: env.FIREBASE_DATABASE_URL,
        storageBucket: env.FIREBASE_STORAGE_BUCKET,
      })
    );
}

export default function setCustomClaims(localId, claims) {
  return initializeApp().then((admin) =>
    admin.auth().setCustomUserClaims(localId, claims)
  );
}
