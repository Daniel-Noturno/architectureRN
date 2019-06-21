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
        {this.state.todos.map(todo => <ToDo key={todo.id} title={todo.text}/>)}
        <Button title={'Descubra o Novo todo!'} onPress={this.addTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
