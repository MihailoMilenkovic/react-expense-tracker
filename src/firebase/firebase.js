import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").push({
//   description: "asdf",
//   note: "",
//   amount: "23",
//   createdAt: 0
// });
// database.ref("expenses").push({
//   description: "a",
//   note: "",
//   amount: "33",
//   createdAt: 0
// });
// database.ref("expenses").push({
//   description: "f",
//   note: "",
//   amount: "53",
//   createdAt: 0
// });

// database.ref().remove();

// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log("expenses:", expenses);
// });

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log("child removed:", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log("child changed", snapshot.key, snapshot.val());
// });
// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log("child added", snapshot.key, snapshot.val());
// });
// database.ref("notes/-M6VvS5EvO3Cx3c6rD20").update({
//   body: "buy food"
// });

// database.ref("notes").push({
//   title: "to do",
//   body: "go for a run"
// });

// const firebaseNotes = {
//   notes: {
//     asdf: {
//       title: "first note",
//       body: "this is my note"
//     },
//     asdfss: {
//       title: "other note",
//       body: "this is another note"
//     }
//   }
// };

// const notes = [{
//   id: "12",
//   title: "First note",
//   body: "this is my note"
// }, {
//   id: "1123",
//   title: "Second note",
//   body: "this is my other note"
// }];

// database.ref("notes").set(notes);

// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log("val:", snapshot.val());
// }, (e) => {
//   console.log("error with data fetching", e);
// });

// const getJobDescription = database.ref().on("value", (snapshot) => {
//   const person = snapshot.val();
//   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
// });

// database.ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data", e);
//   })

// database.ref().set({
//   name: "Mihailo Milenkovic",
//   age: 19,
//   stressLevel: 4,
//   job: {
//     title: "student",
//     company: "none"
//   },
//   location: {
//     city: "Novi Sad",
//     country: "Serbia"
//   },
//   isSingle: true
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log("This failed.", e);
// });

// database.ref().update({
//   job: "Software developer",
//   "location/city": "Beograd"
// });

// database.ref().update({
//   stressLevel: 8,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

//database.ref("isSingle").set(null);

// database.ref("isSingle").remove().then(() => {
//   console.log("removed successfully");
// }).catch((e) => {
//   console.log("error.", e);
// })
