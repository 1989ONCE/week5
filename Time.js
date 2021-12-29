import firebase from 'firebase';

function toDateString(time) {
  const date = new Date(time.seconds * 1000);
  const dateString = `${date.getFullYear().toString()}/${
    (date.getMonth() + 1).toString().padStart(2, '0')}/${
    date.getDate().toString().padStart(2, '0')}  ${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')}:${
    date.getSeconds().toString().padStart(2, '0')}`;

  return dateString;
}

function ArrayEmpty() {
  const Array = [];
  Array.push({
    id: 'none',
    time: 'Time queue is empty',
  });
  return Array;
}

async function getLatestTime() {
  const db = firebase.firestore();
  const lastRef = db.collection('AllTime').orderBy('time', 'asc').limitToLast(1);
  const snapshot = await lastRef.get();

  if (snapshot.empty) {
    return ArrayEmpty();
  }
  const Array = [];
  snapshot.forEach((doc) => {
    Array.push({
      id: doc.id,
      time: toDateString(doc.data().time),
    });
  });
  return Array;
}

async function getAllTimes() {
  const db = firebase.firestore();
  const TimeRef = db.collection('AllTime').orderBy('time', 'desc');

  const querySnapshot = await TimeRef.get();
  if (querySnapshot.empty) {
    return ArrayEmpty();
  }
  const TimesArray = [];
  querySnapshot.forEach((doc) => {
    TimesArray.push({
      id: doc.id,
      time: toDateString(doc.data().time),
    });
  });
  return TimesArray;
}

function addCurrentTime() {
  const db = firebase.firestore();
  const currentRef = db.collection('AllTime');
  const current = {
    time: new Date(),
  };
  currentRef.add(current);
}

async function deleteEarliestTime() {
  const db = firebase.firestore();
  const EarlyRef = db.collection('AllTime').orderBy('time', 'desc').limitToLast(1);
  const snapshot = await EarlyRef.get();
  if (snapshot.empty) {
    return ArrayEmpty();
  }
  snapshot.forEach((doc) => {
    db.collection('AllTime').doc(doc.id).delete();
  });
  return [];
}

export default {
  getLatestTime,
  getAllTimes,
  addCurrentTime,
  deleteEarliestTime,
};
