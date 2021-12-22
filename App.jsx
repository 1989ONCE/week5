import React, { useState, useEffect } from 'react';
import {
  ScrollView, RefreshControl, Text, Button, View,
} from 'react-native';
import {
  Card, Title, TextInput,
} from 'react-native-paper';
// Import Firebase
import firebase from 'firebase';
import FruitController from './test_fruit';

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

const firebaseConfig = {
  apiKey: 'AIzaSyAE1BMN-NymGGpNppqzqeOkQTfVZyrBXzo',
  authDomain: 'test-e75af.firebaseapp.com',
  projectId: 'test-e75af',
  storageBucket: 'test-e75af.appspot.com',
  messagingSenderId: '521591460213',
  appId: '1:521591460213:web:1e510d65b7c13ebe76833c',
  measurementId: 'G-T1RS72GEX1',
};

export default function App() {
  const [item, setItems] = useState([]);
  useEffect(() => {
    FruitController.getAllFruits().then((res) => {
      setItems(res);
    }).catch((err) => {
      throw err;
    });
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    FruitController.getAllFruits().then((res) => {
      setItems(res);
      setRefreshing(false);
    });
  };

  const [Newname, setName] = useState(['NEWfruit']);
  const [Newprice, setPrice] = useState(0);
  const [onsale, setOnsale] = useState(true);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  return (

    <ScrollView
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    >
      { item.map(({
        id, name, price, onSale,
      }) => (
        <Card
          key={id}
          style={{ flex: 1, padding: 10, margin: 4 }}
        >
          <Card.Content>
            <Title>{name}</Title>
            <Text>{`價錢:${price}`}</Text>
            <Text>{`優惠:${onSale}`}</Text>
          </Card.Content>
        </Card>
      ))}

      <View>
        <TextInput
          label="Fruit Name"
          onChangeText={setName}
          placeholder="Name of the fruit"
          value={Newname}
        />
        <Button
          onPress={() => { setOnsale(!onsale); }}
          value={onsale}
          title="default is true, press to set it false"
          color="#007FFF"
        />
        <TextInput
          label="Fruit Price"
          onChangeText={setPrice}
          value={Newprice}
          placeholder="how much is it?"
          keyboardType="numeric"
        />

      </View>
      <Button
        onPress={() => {
          const insert = {
            name: Newname,
            onSale: onsale,
            price: +Newprice,
          };
          FruitController.addFruit(insert);
          setName([]);
          setPrice(null);
          setOnsale(true);
          onRefresh();
        }}
        title="add fruit"
        color="#007FFF"
      />
      {}
      <Button
        onPress={() => {
          FruitController.deleteNotApple().then(() => { onRefresh(); });
        }}
        title="delete not apple"
        color="#007FFF"
      />
    </ScrollView>
  );
}
