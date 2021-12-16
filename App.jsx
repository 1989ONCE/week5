import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableOpacity, ScrollView, Text, Button, View,
} from 'react-native';
import firebase from 'firebase';
import TimeController from './Time';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

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
  const [data, setData] = useState([]);

  useEffect(() => {
    TimeController.getLatestTime().then((res) => {
      setData(res);
    });
  }, [data]);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        onPress={() => {
          TimeController.getLatestTime();
        }}
        title="get lastest time"
        color="#FFBF00"
      >
        <Text>{'\n'}</Text>
      </Button>
      <Text>{'\n'}</Text>

      <Button
        onPress={() => {
          TimeController.getAllTimes();
        }}
        title="get all time"
        color="#007FFF"
      />
      {/* data.map(({ id, time }) => (
          <Text key={id}>
            (
            {`time is:${time}`}
            )
          </Text>
        ))} */}
      <View>
        <Text>
          {` time is: ${data}`}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          TimeController.addCurrentTime();
        }}
      >

        <Text style={styles.buttonText}> add current time </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          TimeController.deleteEarliestTime();
        }}
      >

        <Text style={styles.buttonText}>delete earliest Time </Text>

      </TouchableOpacity>
    </ScrollView>
  );
}
