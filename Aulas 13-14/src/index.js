import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import ToDo from './components/toDo';

export default class App extends Component {
  state = {
    todos: [
      {id: 0, text: 'Fazer Café'},
      {id: 1, text: 'Estudar o Café'},
    ],
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), text: 'Beber o Café!'}]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Melhor Quadrado Vermelho do Mundo!</Text>
        </View>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      {rotateZ: '20deg'},
    ]
  },
  boxText: {
    color: '#FFF',
  }
});
