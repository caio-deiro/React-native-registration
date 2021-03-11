import React from 'react';
import {Text, View} from 'react-native';
import estilo from './style';

export default ({min, max}) => {
  const Aleatorio = parseInt(Math.random() * max - min + 1)

  return (
    <View>
      <Text style={estilo.textos}>o valor foi de {Aleatorio}</Text>
    </View>
  );
};
