import React, { useState, Component } from 'react';
import {
  Button, Text, View, SafeAreaView, ScrollView, TextInput, Image,
} from 'react-native';
import styles from './styles';

function First({ navigation }) {
  const [titleText, setTitleText] = useState("What's the day today?");
  const bodyText = "Don't have a good day, have a great day!!";

  const onPressTitle = () => {
    setTitleText(titleText === "What's the day today?" ? "It's the CAT DAY!!" : "What's the day today?");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
        </Text>
        <Text>{bodyText}</Text>
        <Button
          style={styles.button}
          title="Christmas has arrived~~~"
          onPress={() => navigation.navigate('Settings')}
        />
        <View
          style={{
            flexDirection: 'column',
            height: 500,
            padding: 0,
          }}
        >
          <Text>Hello World!</Text>
          <View style={{ flex: 1 }}>
            <View style={[{ flex: 1, backgroundColor: 'powderblue' }]} />
            <View style={[{ flex: 2, backgroundColor: 'skyblue' }]} />
            <Text>Hello World!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

export default First;
