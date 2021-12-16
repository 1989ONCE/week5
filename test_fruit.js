import firebase from 'firebase';

async function getAllFruits() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');

  const fruitsArray = [];
  const querySnapshot = await fruitsRef.get();
  querySnapshot.forEach((doc) => {
    fruitsArray.push(
      {
        id: doc.id,
        ...doc.data(),
      },
    );
  });
  console.log(fruitsArray);
}

async function deleteNotApple() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const querySnapshot = await fruitsRef.where('name', '!=', 'apple').get();
  querySnapshot.forEach((doc) => {
    db.collection('fruit').doc(doc.id).delete();
  });
}

export default {
  getAllFruits,
  deleteNotApple,
};
