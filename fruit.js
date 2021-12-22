import firebase from 'firebase';

async function getFruit() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('wtfU1ivEfFI02UL6Fu5S');
  const doc = await fruitRef.get();
  console.log(doc.data());
}

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

function addFruit() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const fruit = {
    name: 'banana',
    price: 18,
    onSale: false,
  };
  fruitsRef.add(fruit);
  getAllFruits();
}
function deleteFruit() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('wfHbGbjoDm9CC9CBfsj8');
  fruitRef.delete();
}
async function switchFruitOnSale() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('5uKZcInjcuP4ZlRgxo6d');
  const doc = await fruitRef.get();
  fruitRef.set({
    onSale: !doc.data().onSale,
  }, { merge: true });
}

export default {
  getFruit,
  getAllFruits,
  addFruit,
  deleteFruit,
  switchFruitOnSale,
};
