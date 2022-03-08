import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

const appsLength = getApps().length;

!appsLength &&
  initializeApp({
    credential: applicationDefault(),
  });

const db = getFirestore();

export const firestore = { db, appsLength };
