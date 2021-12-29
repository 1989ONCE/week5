import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableOpacity, ScrollView, Text, Button, RefreshControl,
} from 'react-native';
import {
  Card, Title,
} from 'react-native-paper';
import firebase from 'firebase';
import TimeController from './Time';

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, */
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
  const [latestTime, setLatestTime] = useState([]);
  const [all, setAll] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    TimeController.getAllTimes().then((res) => {
      setAll(res);
      setRefreshing(false);
    });
  };

  useEffect(() => {
    TimeController.getLatestTime().then((res) => {
      setLatestTime(res);
    }).catch((err) => {
      throw err;
    });
  }, []);

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
      <Text>{'\n\n  All Time'}</Text>
      { all.map(({
        id, time,
      }) => (
        <Card
          key={id}
          style={{ flex: 1, padding: 10, margin: 4 }}
        >
          <Card.Content>
            <Title>{id}</Title>
            <Text>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n   Latest Time'}</Text>
      { latestTime.map(({
        id, time,
      }) => (
        <Card
          key={id}
          style={{ flex: 1, padding: 10, margin: 4 }}
        >
          <Card.Content>
            <Title>{id}</Title>
            <Text>{time}</Text>
          </Card.Content>
        </Card>
      ))}
      <Text>{'\n'}</Text>
      <Button
        onPress={() => {
          TimeController.getLatestTime().then(() => { onRefresh(); });
        }}
        title="get lastest time(可有可無)"
        color="#FFBF00"
      >
        <Text>{'\n'}</Text>
      </Button>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          TimeController.addCurrentTime().then(() => { onRefresh(); });
        }}
      >
        <Text style={styles.buttonText}> add current time </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          TimeController.deleteEarliestTime().then(() => { onRefresh(); });
        }}
      >

        <Text style={styles.buttonText}>delete earliest Time </Text>

      </TouchableOpacity>
    </ScrollView>
  );
}
