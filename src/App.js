import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native';

import Caio from './Components/Primeiro';
import Padrao, { Comp1, Comp2 } from './Components/Mult';
import Minmax from './Components/Minmax';
import Aleatorio from './Components/Aleatorio';
import Titulo from './Components/Title'
import Contador from './Components/Contador'

export default () => {

  const [name, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const cadastro = () => {
    alert(name);
    alert(email);
    alert(password);
    //fazer chamada no back-end para cadastro

  }
  return (
    <ScrollView>


      <View style={styles.App}>
        <Image
          style={{ width: 300, height: 200, }}
          source={require('../Images/reactWhite.png')}
        />
        <Text style={{ fontSize: 40, fontStyle: 'italic', marginBottom: 10 }}>Cadastro</Text>

        <TextInput style={styles.textInput} placeholder={'Nome'} placeholderTextColor={'#FFFF'} onChangeText={Text => setNome(Text)} />
        <TextInput style={styles.textInput} placeholder={'Email'} placeholderTextColor={'#FFFF'} onChangeText={Text => setEmail(Text)} />
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder={'Senha'} placeholderTextColor={'#FFFF'} onChangeText={Text => setPassword(Text)} />

        <TouchableOpacity style={styles.botao} onPress={() => cadastro()} >
          <Text style={{ color: '#1f1f1f', textAlign: 'center', fontSize: 20 }}>
            Cadastrar!
       </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};


//estilos do programa**********************************
const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 20
  },

  textInput: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#23a1ea',
    paddingLeft: 20,
    fontSize: 20,
    marginBottom: 10,
  },

  botao: {
    padding: 15,
    backgroundColor: '#7deded',
    borderRadius: 20,
    fontSize: 18,
    width: '100%',
    marginTop: 20,
  }
});

/*<View style={style.App}>

      <Aleatorio max={1000} min={0} />
      <Aleatorio max={1000} min={0} />
      <Aleatorio max={1000} min={0} />
      <Aleatorio max={1000} min={0} />
      <Aleatorio max={1000} min={0} />
      <Aleatorio max={1000} min={0} />

    </View>
    */
