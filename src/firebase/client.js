import { firestore } from "./admin";

// import { enableIndexedDbPersistence } from "firebase/firestore";

// if (!firestore.appsLength) {
//   enableIndexedDbPersistence(firestore.db).catch((err) => {
//     if (err.code === "failed-precondition") {
//       console.log(
//         "Multiple tabs open, persistence can only be enabled in one tab at a a time..."
//       );
//     } else if (err.code === "unimplemented") {
//       console.log(
//         "The current browser does not support all of the features required to enable persistence..."
//       );
//     }
//   });
// }

export const getMedia = async (col, lim = 0) => {
  const photosCollection = await firestore.db
    .collection(col)
    .orderBy("position", "asc")
    .limit(lim)
    .get();
  // onSnapshot(photosCollection, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //       console.log("New city: ", change.doc.data());
  //     }

  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log(`Data came from ${source}`);
  //   });
  // });
  const photosList = photosCollection.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return photosList;
};

export const getSpecificMedia = async (col, name) => {
  const docSnapshot = await firestore.db
    .collection(col)
    .where("title", "==", name.toLowerCase())
    .get();

  const doc = docSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (!doc.length) {
    return {};
  }

  return doc[0];
};

export const loadCover = async (col) => {
  const docSnapshot = await firestore.db
    .collection(col)
    .where("isCover", "==", true)
    .get();
  // onSnapshot(mediaDoc, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //       console.log("New city: ", change.doc.data());
  //     }

  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log(`Data came from ${source}`);
  //   });
  // });
  const docList = docSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return docList;
};
