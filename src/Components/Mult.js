import React from 'react' 
import {Text} from 'react-native'
import Estilo from './style'


export default function () {
    return <Text style={Estilo.textos}>Ola galera</Text>
}

export function Comp1() {
    return <Text style={Estilo.textos}>Xau galera</Text>
}

export function Comp2(){
    return <Text style={Estilo.textos}>Estou com fome</Text>
}
