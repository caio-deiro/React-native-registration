import React from 'react' 
import {Text} from 'react-native'
import estilo from './style'

export default (props) => {
    console.warn(props)
    return (
        <Text style={estilo.textos}> O maximo foi de {props.max} e o minimo foi de {props.min} </Text>
    )
    
}