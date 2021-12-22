import firebase from 'firebase';

async function getAllFruits() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');

  const fruitsArray = [];
  const querySnapshot = await fruitsRef.get();
  querySnapshot.forEach((doc) => {
    fruitsArray.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return fruitsArray;
}

async function deleteNotApple() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const querySnapshot = await fruitsRef.where('name', '!=', 'apple').get();
  querySnapshot.forEach((doc) => {
    db.collection('fruit').doc(doc.id).delete();
  });
}

function addFruit(insert) {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  fruitsRef.add(insert);
}

export default {
  getAllFruits,
  deleteNotApple,
  addFruit,
};
