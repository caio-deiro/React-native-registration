import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import style from './style';

// import { Container } from './styles';

export default ({ inicial = 0, passo = 5 }) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
    }

    const dec = () => {
        setNumero(numero - passo)
    }

    return (
        <View>

            <Text style={style.text}> {numero} </Text>
            <Button title='+' onPress={inc} />
            <Button title='-' onPress={dec} />
        </View>

    )
}