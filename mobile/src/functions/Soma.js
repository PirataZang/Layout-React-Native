import { View, Text } from 'react-native'
import React from 'react'

export default function Soma({Val1, Val2}) {
    const VALOR = Val1 + Val2;
    return (
        <View>
            <Text>{VALOR}</Text>
        </View>
    )
}