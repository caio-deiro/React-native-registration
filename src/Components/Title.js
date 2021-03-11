import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default (props) => {
    return (
        <View style={style.app}>
            <Text style={style.title}> {props.principal} </Text>
            <Text style={style.text}>{props.secundario}</Text>
        </View>

    )

}