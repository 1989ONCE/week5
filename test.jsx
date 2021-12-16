import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import {
  Text, View, FlatList, Button, ScrollView, Image,
} from 'react-native';
import styles from './styles';

function test({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue', padding: 10 }}>
      <Text style={styles.xmas}>Merry Christmas!!! 🎄 🎄 🎄</Text>
      <View style={{ flex: 1, backgroundColor: '#D5E0CA' }}>
        <Text style={styles.title}>You know it's Christmas when you saw them~~</Text>
        <ScrollView>
          <Text style={{ textAlign: 'center', fontSize: 25 }}>Mistletoe</Text>
          <Image style={styles.image1} source={require('./mistletoe.jpg')} />
          <Text style={{ textAlign: 'center', fontSize: 25 }}>Christmas Tree and the stockings</Text>
          <Image style={styles.image2} source={require('./tree.jpg')} />
          <Text style={{ textAlign: 'center', fontSize: 25 }}>Santa Claus</Text>
          <Image style={styles.image3} source={require('./santa.jpg')} />
          <Text style={{ textAlign: 'center', fontSize: 25 }}>Rudolph</Text>
          <Image style={styles.image4} source={require('./deer.jpg')} />
        </ScrollView>
        <View>
          <Text style={styles.title}>
            You'll receive a gift at Christmas eve,
            {'\n'}
            {' '}
            only if you still believe in Santa.....
          </Text>
          <View style={{ backgroundColor: 'lightpink', alignItems: 'center' }}><Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 20 }}>Famous Christmas Carol</Text></View>
          <FlatList
            data={[
              { key: 'O Holy Night' },
              { key: 'Silent Night' },
              { key: 'Joy to the World' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            title="Back to front page."
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
}
export default test;
