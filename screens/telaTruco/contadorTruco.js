//TELA DA CONTAGEM 

//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA
//TELA INICIAL NÃO USADA

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nos: 0,
      eles: 0,
    };
    this.nos = 0;
    this.eles = 0;
  }

  somaNos(){
    this.setState({
      nos : this.nos + 1,
    });
    this.nos = this.nos + 1
    if (this.nos == 12) {
      alert('Vencedor: "Nós"')
      this.zerar()
    }

    if (this.nos == 11) {
      alert('MÃO DE 11')
    }
    }

  somaEles(){
    this.setState({
      eles : this.eles + 1,
    });
    this.eles = this.eles + 1
    if (this.eles == 12) {
      alert('Vencedor: "Eles"')
      this.zerar()
    }

    if (this.eles == 11) {
      alert('MÃO DE 11')
    }
  }

  somaNos_3(){
    this.setState({
      nos : this.nos + 3,
    });
    this.nos = this.nos + 3
    if (this.nos == 12) {
      alert('Vencedor: "Nós"')
      this.zerar()
    }

    if (this.nos == 11) {
      alert('MÃO DE 11')
    }
  }

  somaEles_3(){
    this.setState({
      eles : this.eles + 3,
    });
    this.eles = this.eles + 3
    if (this.eles == 12) {
      alert('Vencedor: "Eles"')
      this.zerar()
    }
  }

  subtraiNos(){
    this.setState({
      nos : this.nos - 1,
    });
    this.nos = this.nos - 1
    if (this.nos < 0) {
      alert('não pode ter menos que 0 pontos')
      this.setState({
        nos: this.nos = 0
      });
    }
  }

  subtraiEles(){
    this.setState({
      eles : this.eles - 1,
    });
    this.eles = this.eles - 1
    if (this.eles < 0) {
      alert('não pode ter menos que 0 pontos')
      this.setState({
        eles: this.eles = 0
      });
    }
  }

  zerar(){
    this.setState({
      eles : this.eles = 0,
      nos : this.nos = 0
    });
    this.eles = this.eles = 0,
    this.nos = this.nos = 0
    console.log('Todos os pontos zerados!')
  }

  render(){
    
    return (
      <View style = {styles.D3}>
        <View style = {styles.D}>
          <Text style={styles.placar_nos}>Nós</Text>
          <Text style={styles.placar_eles}>Eles</Text>
          <Text style={styles.placar_pontosNos}>{this.state.nos}</Text>
          <Text style={styles.placar_pontosEles}>{this.state.eles}</Text>

            <View style = {styles.D2}>

              <TouchableOpacity onPress={ () => this.somaNos()}>
                <Text style={styles.botaoNos1}>+1</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.somaNos_3()}>
                <Text style={styles.botaoNos3}>+3</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.subtraiNos()}>
                <Text style={styles.botaoNosSub}>-1</Text>
              </TouchableOpacity>
              

              <TouchableOpacity onPress={ () => this.somaEles()}>
                <Text style={styles.botaoEles1}>+1</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.somaEles_3()}>
                <Text style={styles.botaoEles3}>+3</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.subtraiEles()}>
                <Text style={styles.botaoElesSub}>-1</Text>
              </TouchableOpacity>
             
            </View>

            <TouchableOpacity style={styles.zerar} onPress={ () => this.zerar()}>
                <Text style={styles.zerar}>ZERAR</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placar_nos:{
    color: 'skyblue',
    fontSize: 40,
    position: 'absolute',
    top: 20,
    right: 30
  },
  placar_eles:{
    color: 'tomato',
    fontSize: 40,
    position: 'absolute',
    top: 20,
    left: 30
  },
  placar_pontosEles:{
    color: 'black',
    fontSize: 40,
    position: 'absolute',
    top: 100,
    left: 50
  },
  placar_pontosNos:{
    color: 'black',
    fontSize: 40,
    position: 'absolute',
    top: 100,
    right: 50
  },

  botaoNos1:{
    position: 'absolute',
    right: 50,
    top: 110,
    fontSize: 35
  },
  botaoNos3:{
    position: 'absolute',
    right: 50,
    top: 210,
    fontSize: 35
  },
  botaoNosSub:{
    position: 'absolute',
    right: 50,
    top: 310,
    fontSize: 35,
  },


  botaoEles1:{
    position: 'absolute',
    left: 50,
    top: 110,
    fontSize: 35
  },
  botaoEles3:{
    position: 'absolute',
    left: 50,
    top: 210,
    fontSize: 35
  },
  botaoElesSub:{
    position: 'absolute',
    left: 50,
    top: 310,
    fontSize: 35
  },

  zerar:{
    position: 'absolute',
    marginVertical: 315,
    marginHorizontal: 87,
    fontSize: 30,
    color: 'purple'
  },

  D:{
    marginVertical: '15%'
  },
  D2:{
    marginVertical: '45%'
  },
  D3:{
    marginVertical: '10%'
  }
})    
