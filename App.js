import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from './src/components/Greeting';

export default class App extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='John' />
        <Greeting name="Doe" />
        <Greeting name="Wkwkwk land" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
