import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import {createAppNavigator, createAppContainer} from 'react-navigation'

export default class App extends React.Component {

  state = {
    timeNos: '',
    timeEles: ''
  };

//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA

  render(){
    return (
      <SafeAreaView>
        <View style={styles.Div}>
          {/* TIME INIMIGO */}
          <Text style={styles.textoTimeDeles}>TIME INIMIGO</Text>
          <TextInput 
            style={{marginHorizontal: 10, height: 50, width: '80%'}}
            onChangeText={timeEles => this.setState({ timeEles })} 
            placeholder = "Digite o nome do time DELES..."
            maxLength = {25}
          />

        <View style={{marginVertical: 10}}>
          {/* TIME ALIADO */}
          <Text style={styles.textNossoTime}>SEU TIME</Text>
          <TextInput
            style={{marginHorizontal: 10, height: 50, width: '80%'}}
            onChangeText={timeNos => this.setState({ timeNos })} 
            placeholder = "Digite o nome do SEU time..."
            maxLength = {25}
          />
        </View>

          <TouchableOpacity style={styles.divBtnSalvar}>
            <Text style={styles.btnSalvar}>Salvar Times</Text>
          </TouchableOpacity>
     
        <View style={{height: '100%', marginVertical: '10%', width: '100%'}}>
          <Text style={styles.textoTime}>{ this.state.timeEles }</Text>
          <Text style={{color: "#000", fontSize: 55, textAlign: "center", fontFamily: 'MarkerFelt-Thin'}}>Vs.</Text>
          <Text style={styles.textoTime}>{ this.state.timeNos }</Text>

        </View>
       </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textoTime:{
    textAlign: "center",
    fontSize: 45,
    fontFamily: 'Palatino-Italic',
    marginVertical: '12%'
  },
  btnSalvar:{
    textAlign: "center",
    fontSize: 20,
    marginVertical: 15,
    color: '#FFF',
    fontFamily: 'Arial',
  },
  btnIniciar:{
    textAlign: "center",
    fontSize: 50,
    fontFamily: 'Arial',
    color: '#FFF',
    marginVertical: 10
  },
  divBtnSalvar:{
    backgroundColor: '#007d97',
    width: '50%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 7,
    marginHorizontal: 10,
  },
  divBtnIniciar:{
    backgroundColor: '#2F4F4F',
    marginHorizontal: 15,
    height: 80,
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 10
  },
  Div:{
    marginVertical: '12%',
    height: '100%',
  },
  textNossoTime:{
    color: 'green', 
    marginHorizontal: 10, 
    textAlign: "center", 
    fontSize: 15,
    fontFamily: 'AvenirNext-BoldItalic',
  },
  textoTimeDeles:{
    color: 'crimson', 
    marginHorizontal: 10, 
    textAlign: "center", 
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext-BoldItalic'
  }
}) 

console.disableYellowBox = true;