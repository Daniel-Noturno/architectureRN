import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    counter: 0,
  };

  componentDidMount(){
    //Executado assim que o objeto é renderisado 
    setTimeout(() => {
      this.setState({text: 'Hellow World'})
    }, 3000);
  }
  //OBS.: Métodos abaixo não podem ser utilizados funções que mudam o state ou o props(setState({}) ou .props), por que...
  //...servem excusivamente para gerenciar o ciclo de vida do componente ou disparar algum evento.

  //static getDerivedStateFromProps(nextProps, prevState) {
      //Usa as props recebidas pelo componete e retorna algo no state
        //Esse método é uma exceção, porem ele muda o state de forma statica antes de alcançar o componente...
        //...( Não usando .setState({}) ).
  //  return {text: nextProps.text}
  //}

  shouldComponentUpdate(nextProps, nextState){
    //Executado antes de cada atualização impedindo, ou não, a renderização do objeto de acordo com serta condição (true ou false)
    return nextState.counter < 5
  }

  handleCounterUpdate = () => {
    this.setState({ counter: this.state.counter +1 });
  }

  componentDidUpdate(prevProps, prevState) {
    //Executado após o método render ser executado novamente, recemendo as props e o state anteriores dessa renderização
  }

  componentWillUnmount() {
    //Executado logo antes do componente ser "des-renderizado", assim pode-se apagar coisas do componente liberando memoria
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleCounterUpdate} title={'Add'} />
        <Text>{this.state.counter}</Text>
        <Text>{this.state.text}</Text>
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
