import './ReactotronConfig';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

console.tron.log('Teste Bro!');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
