import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors'

export default function ResultCalculation(props) {

    const { errorMessage, valor, intereses, meses, total } = props

    console.log(valor, intereses)

    return (
        <View style={styles.contentAlert}>
            <Text>{total && (<Text>Result total</Text>)}</Text>

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    contentAlert: {
        height: 100,
        width: '100%',
        paddingHorizontal: 38,
    },

    error: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },


})
