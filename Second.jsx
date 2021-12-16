import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './styles';

function Second({ navigation }) {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText(titleText === "Bird's Nest" ? "Bird's Nest [pressed]" : "Bird's Nest");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
        <Text numberOfLines={5} onPress={() => navigation.goBack()}>{bodyText}</Text>
        <View
          style={{
            height: 200,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View style={{ backgroundColor: 'red', flex: 0.5 }} />
          <Text>Hello World!</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

export default Second;
