import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',fontSize:15}}>大家好，我是資管二的陳佳妤，也可以叫我小陳~{"\n"}
                      Happy Halloween & 祝期中都能歐趴 T~T{"\n"}{"\n"}</Text>
      
      <Image style={{width: 420, height: 640}} source={require('./assets/halloween.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
